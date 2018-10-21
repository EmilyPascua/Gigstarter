package gigstarter.api.controller;

import gigstarter.api.model.EmployerUser;
import gigstarter.api.model.StudentUser;
import gigstarter.api.service.EmailVerificationService;
import gigstarter.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private EmailVerificationService emailVerificationService;

    @PostMapping("/sign-up/student")
    public String signUpStudent(@RequestBody StudentUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        boolean success = userService.createStudentUser(user);
        if(success){
            return "Student account created. E-mail verification has been sent to "+user.getEmail()+".";
        }
        else{
            return "Error! Something went wrong.";
        }
    }

    @PostMapping("/sign-up/employer")
    public String signUpEmployer(@RequestBody EmployerUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        boolean success = userService.createEmployerUser(user);
        if(success){
            return "Employer account created. E-mail verification has been sent to "+user.getEmail()+".";
        }
        else{
            return "Error! Something went wrong.";
        }
    }

    @GetMapping("/email/verify")
    public String verifyEmail(@RequestParam("token") String token){
        boolean success = emailVerificationService.verifyEmail(token);
        if(success){
            return "Success! Your e-mail has now been verified. Welcome to Gigstarter!";
        }
        else{
            return "Error! E-mail validation was unsuccessful.";
        }
    }

    @PostMapping("/email/disable")
    public String disableEmailNotifications(@RequestHeader("Authorization") String auth){
        boolean success = true;

        if(success){
            return "Email notifications have been disabled for ";
        }
        else{
            return "Something went wrong! The server could not disable notifications  for" +
                    " Please inform Gigstarter about this error at ";
        }
    }

}
