package gigstarter.api.service;

import gigstarter.api.exception.InvalidEmailTokenException;
import gigstarter.api.exception.ResourceNotFoundException;
import gigstarter.api.model.ApplicationUser;
import gigstarter.api.model.VerificationToken;
import gigstarter.api.repository.ApplicationUserRepository;
import gigstarter.api.repository.VerificationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmailVerificationService {

    @Autowired
    private VerificationTokenRepository verificationTokenRepository;

    @Autowired
    private ApplicationUserRepository applicationUserRepository;

    @Autowired
    private EmailService emailService;

    public boolean sendVerificationEmail(ApplicationUser user){
        VerificationToken token = new VerificationToken();
        token.setUser(user);
        String payload = "Please verify your email address at Gigstarter.me by clicking the following link:\n\n";
        payload += token.getUrl();
        emailService.sendSimpleMessage(user.getEmail(), "Verify your e-mail at Gigstarter.me", payload);
        //token.setToken(bCryptPasswordEncoder.encode(token.getToken()));
        token.setEncoded(true);
        verificationTokenRepository.save(token);
        return true;
    }


    public boolean verifyEmail(String token){
        String encodedToken = token;
        if(verificationTokenRepository.existsByToken(encodedToken)){
            VerificationToken verificationToken = verificationTokenRepository.getByToken(encodedToken);
            ApplicationUser user = verificationToken.getUser();
            if(user == null){
                throw new InvalidEmailTokenException("The provided e-mail token does not belong to a user.");
            }
            else if(user.isEnabled()){
                throw new InvalidEmailTokenException("The e-mail address "+user.getEmail()+" has already been confirmed.");
            }
            else{
                if(verificationToken.hasExpired()){
                    throw new InvalidEmailTokenException("The provided e-mail token has expired.");
                }
                else if(!verificationToken.isEncoded()){
                    throw new InvalidEmailTokenException("The provided e-mail token is not secure. A new verification " +
                            "e-mail has been sent. Please check your inbox.");
                }
                else{
                    user.setEnabled(true);
                    applicationUserRepository.save(user);
                    return true;
                }

            }
        }
        else{
            VerificationToken someToken = null;
            Long id = Integer.toUnsignedLong(0);
            while( someToken == null && id < 100000 ){
                if(verificationTokenRepository.existsById(id)){
                    someToken = verificationTokenRepository.getOne(id);
                }
                else{
                    id++;
                }
            }

            throw new ResourceNotFoundException("The provided e-mail verification token does not exist.\n" +
                    "token used:  "+token+"\n" +
                    "token encoded:  "+encodedToken+"\n" +
                    "token found: "+someToken.getToken());
        }
    }

}
