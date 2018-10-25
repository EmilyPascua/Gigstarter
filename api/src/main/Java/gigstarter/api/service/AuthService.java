package gigstarter.api.service;

import gigstarter.api.exception.ForbiddenActionException;
import gigstarter.api.exception.ResourceNotFoundException;
import gigstarter.api.model.ApplicationUser;
import gigstarter.api.model.EmployerUser;
import gigstarter.api.model.Job;
import gigstarter.api.model.StudentUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    UserService userService;

    @Autowired
    JobService jobService;

    public ApplicationUser getUser(){


        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        ApplicationUser applicationUser = userService.findUser(email);

        if(applicationUser == null){
            throw new ResourceNotFoundException("Authenticated user was not found in the database.");
        }
        else{
            return applicationUser;
        }
    }

    public boolean isEmployerUser(){
        ApplicationUser user = getUser();
        return (user instanceof EmployerUser);
    }

    public boolean isStudentUser(){
        ApplicationUser user = getUser();
        return (user instanceof StudentUser);
    }

    public boolean jobBelongsToUser(Long jobId){
        if(!isEmployerUser()){
            throw new ForbiddenActionException("Only Employer users may interact with gigs.");
        }
        EmployerUser user = (EmployerUser) getUser();
        Job dbJob = jobService.find(jobId);
        return(dbJob.getEmployer().getId() == user.getId());
    }

}
