package gigstarter.api.service;

import gigstarter.api.model.ApplicationUser;
import gigstarter.api.model.VerificationToken;
import gigstarter.api.repository.ApplicationUserRepository;
import gigstarter.api.repository.VerificationTokenRepository;
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

    @Autowired
    private SimpleMailMessage template;

    @Autowired
    private VerificationTokenRepository verificationTokenRepository;

    @Autowired
    private ApplicationUserRepository applicationUserRepository;

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

    public boolean sendVerificationEmail(ApplicationUser user){
        VerificationToken token = new VerificationToken(user);
        verificationTokenRepository.save(token);
        String payload = "Please verify your email address at Gigstarter.com by clicking the following link:\n\n";
        payload += token.getUrl();
        sendSimpleMessage(user.getEmail(), "Verify your email address", payload);
        return true;
    }


    public boolean verifyEmail(Long userId, Long tokenId, String token){
        if(!verifyToken(userId, tokenId, token)){
            return false;
        }
        else{
            ApplicationUser user = applicationUserRepository.getOne(userId);
            user.setEnabled(true);
            verificationTokenRepository.deleteById(tokenId);
            return true;
        }
    }

    private boolean verifyToken(Long userId, Long tokenId, String token){
        ApplicationUser user = applicationUserRepository.getOne(userId);
        if(user == null){
            return false;
        }
        VerificationToken verificationToken = verificationTokenRepository.getOne(tokenId);
        if(verificationToken == null){
            return false;
        }

        if(verificationToken.getToken().equals(token) && verificationToken.getUser().getId() == userId){
            return true;
        }
        else{
            return false;
        }
    }

}