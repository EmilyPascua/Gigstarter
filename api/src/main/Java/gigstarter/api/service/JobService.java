package gigstarter.api.service;


import gigstarter.api.exception.ForbiddenActionException;
import gigstarter.api.exception.ResourceNotFoundException;
import gigstarter.api.model.ApplicationUser;
import gigstarter.api.model.EmployerUser;
import gigstarter.api.model.Job;
import gigstarter.api.model.StudentUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobService {

    @Autowired
    EmailService emailService;

    @Autowired
    UserService userService;

    public void apply(ApplicationUser user, Job job){

        if(!user.getClass().isInstance(StudentUser.class)){
            throw new ForbiddenActionException("Only student users may apply for jobs.");
        }

        StudentUser student = userService.findStudentUser(user.getEmail());

        // Check if user has confirmed e-mail address
        if(!student.isEnabled()){
            throw new ForbiddenActionException("You must confirm your e-mail address before you may apply for jobs.");
        }

        studentApplyEmail(student, job);

        EmployerUser employer = job.getEmployer();

    }


    private void studentApplyEmail(StudentUser user, Job job){

        String emailSubject = "You have applied to "+ job.getTitle();

        String emailContent = "Thank you for applying to one of our many amazing gigs! " +
                "You have taken a very important step in putting your knowledge to the test. " +
                "If you and the employer are a perfect match, " +
                "the employer will contact you regarding the full description of the project.\n\n\n";

        emailContent += "The gig you applied for was posted with the following details:\n\n\n";

        emailContent += job.getTitle()+": \n" +
                "\nEmployer: " + job.getEmployer().getBusinessName() +
                "\nPayout: $" + job.getPayout() +
                "\nLocation: " + job.getLocation() +
                "\nIndustry: "+job.getIndustry() +
                "\nMajor: " + job.getMajor() +
                "\n\n" + job.getDescription();

        emailContent += "\n\n\n";

        emailService.sendMailToUser(user, emailSubject, emailContent);
    }

}
