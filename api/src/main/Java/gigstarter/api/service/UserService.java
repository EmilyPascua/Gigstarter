package gigstarter.api.service;

import gigstarter.api.exception.UserAlreadyExistsException;
import gigstarter.api.model.EmployerUser;
import gigstarter.api.model.StudentUser;
import gigstarter.api.repository.ApplicationUserRepository;
import gigstarter.api.repository.EmployerUserRepository;
import gigstarter.api.repository.StudentUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    ApplicationUserRepository applicationUserRepository;

    @Autowired
    StudentUserRepository studentUserRepository;

    @Autowired
    EmployerUserRepository employerUserRepository;

    @Autowired
    EmailService emailService;

    public boolean createStudentUser(StudentUser user){
        if(!emailExists(user.getEmail())){
            studentUserRepository.save(user);
            return emailService.sendVerificationEmail(user);
        }
        else{
            throw new UserAlreadyExistsException("The e-mail provided already exists.");
        }
    }

    public boolean createEmployerUser(EmployerUser user){
        if(!emailExists(user.getEmail())){
            employerUserRepository.save(user);
            return emailService.sendVerificationEmail(user);
        }
        else{
            throw new UserAlreadyExistsException("The e-mail provided already exists.");
        }
    }

    public boolean emailExists(String email){
        return(applicationUserRepository.findByEmail(email) != null);
    }

}
