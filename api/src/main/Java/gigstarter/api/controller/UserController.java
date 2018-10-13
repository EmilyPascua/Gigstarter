package gigstarter.api.controller;

import gigstarter.api.model.EmployerUser;
import gigstarter.api.model.StudentUser;
import gigstarter.api.service.EmailService;
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
    private EmailService emailService;

    @PostMapping("/sign-up/student")
    public String signUpStudent(@RequestBody StudentUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return Boolean.toString(userService.createStudentUser(user));
    }

    @PostMapping("/sign-up/employer")
    public String signUpEmployer(@RequestBody EmployerUser user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return Boolean.toString(userService.createEmployerUser(user));
    }

    @PostMapping("/email")
    public String sendEmail(@RequestHeader("email") String email,
                            @RequestHeader("subject") String subject,
                            @RequestBody String content){
        return Boolean.toString(emailService.sendSimpleMessage(email, subject, content));
    }

    @GetMapping("/email/verify")
    public String verifyEmail(@RequestParam("user_id") Long userId,
                              @RequestParam("token_id") Long tokenId,
                              @RequestParam("token") String token){
        return Boolean.toString(emailService.verifyEmail(userId, tokenId, token));
    }

}
