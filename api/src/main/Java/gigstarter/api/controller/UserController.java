package gigstarter.api.controller;

import gigstarter.api.model.ApplicationUser;
import gigstarter.api.model.EmployerUser;
import gigstarter.api.model.StudentUser;
import gigstarter.api.service.AuthService;
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

    @Autowired
    private AuthService authService;

    @GetMapping("/user")
    public ApplicationUser getUser(){
        ApplicationUser user = authService.getUser();
        user.setPassword(null);
        return user;
    }

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
    public String disableEmailNotifications(){

        ApplicationUser user = authService.getUser();
        userService.setEmailNotifications(user, false);

        return "E-mail notifications have been disabled for "+user.getEmail()+".";
    }

    @PostMapping("/email/enable")
    public String enableEmailNotifications(){

        ApplicationUser user = authService.getUser();
        userService.setEmailNotifications(user, false);

        return "E-mail notifications have been enabled for "+user.getEmail()+".";
    }

}
