package gigstarter.api.service;

import gigstarter.api.exception.ResourceNotFoundException;
import gigstarter.api.model.ApplicationUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    UserService userService;

    public ApplicationUser getUser(){

        User user = (User) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();

        String email = user.getUsername();
        ApplicationUser applicationUser = userService.findUser(email);

        if(applicationUser == null){
            throw new ResourceNotFoundException("Authenticated user was not found in the database.");
        }
        else{
            return applicationUser;
        }
    }

}
