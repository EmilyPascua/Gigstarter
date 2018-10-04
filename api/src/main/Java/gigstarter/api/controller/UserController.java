package gigstarter.api.controller;

import gigstarter.api.model.EmployerUser;
import gigstarter.api.model.StudentUser;
import gigstarter.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

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
}
