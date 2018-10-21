package gigstarter.api.service;

import gigstarter.api.exception.InvalidEmailException;
import gigstarter.api.model.ApplicationUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.SendFailedException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender emailSender;


    public boolean sendSimpleMessage(
            String to, String subject, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(subject);
        message.setText(text);
        emailSender.send(message);
        return true;
    }

    public boolean sendMessageWithAttachment(
            String to, String subject, String text, String pathToAttachment) {

        try{
            MimeMessage message = emailSender.createMimeMessage();

            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(text);

            FileSystemResource file
                    = new FileSystemResource(new File(pathToAttachment));
            helper.addAttachment("Invoice", file);
            emailSender.send(message);
            return true;

        }
        catch (SendFailedException e){
            return false;
        }
        catch (Exception e){
            // Handle exception
            return false;
        }
    }

    public void sendMailToUser(ApplicationUser user, String subject, String text){
        if(!user.isEnabled()){
            throw new InvalidEmailException("The e-mail address "+user.getEmail()+" has not been confirmed.");
        }
        else if(!user.emailNotificationsEnabled()){
            throw new InvalidEmailException("The user "+user.getEmail()+" has disabled e-mail notifications.");
        }
        else{
            String email = user.getEmail();
            sendSimpleMessage(email, subject, text);
        }
    }

    public boolean emailConfirmed(ApplicationUser user){
        return user.isEnabled();
    }

    public boolean disableEmailNotificationUrl(ApplicationUser user){
        return true;
    }





}