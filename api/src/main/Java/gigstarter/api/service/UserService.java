package gigstarter.api.service;

import gigstarter.api.exception.ResourceNotFoundException;
import gigstarter.api.exception.UserAlreadyExistsException;
import gigstarter.api.model.ApplicationUser;
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
    private ApplicationUserRepository applicationUserRepository;

    @Autowired
    private StudentUserRepository studentUserRepository;

    @Autowired
    private EmployerUserRepository employerUserRepository;

    @Autowired
    private EmailVerificationService emailVerificationService;

    public boolean createStudentUser(StudentUser user){
        if(!emailExists(user.getEmail())){
            studentUserRepository.save(user);
            return emailVerificationService.sendVerificationEmail(user);
        }
        else{
            throw new UserAlreadyExistsException("The e-mail provided already exists.");
        }
    }

    public boolean createEmployerUser(EmployerUser user){
        if(!emailExists(user.getEmail())){
            employerUserRepository.save(user);
            return emailVerificationService.sendVerificationEmail(user);
        }
        else{
            throw new UserAlreadyExistsException("The e-mail provided already exists.");
        }
    }

    public boolean emailExists(String email){
        return(applicationUserRepository.findByEmail(email) != null);
    }

    public ApplicationUser findUser(String email){
        ApplicationUser user = applicationUserRepository.findByEmail(email);
        if(user == null){
            throw new ResourceNotFoundException("User "+email+" was not found in the database.");
        }
        else{
            return user;
        }
    }

    public StudentUser findStudentUser(String email){
        StudentUser user = studentUserRepository.findByEmail(email);
        if(user == null){
            throw new ResourceNotFoundException("Student user "+email+" was not found in the database.");
        }
        else{
            return user;
        }
    }

    public EmployerUser findEmployerUser(String email){
        EmployerUser user = employerUserRepository.findByEmail(email);
        if(user == null){
            throw new ResourceNotFoundException("Employer user "+email+" was not found in the database.");
        }
        else{
            return user;
        }
    }

}
