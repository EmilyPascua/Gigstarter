package gigstarter.api.service;


import gigstarter.api.exception.ForbiddenActionException;
import gigstarter.api.exception.InvalidEmailException;
import gigstarter.api.exception.ResourceNotFoundException;
import gigstarter.api.model.ApplicationUser;
import gigstarter.api.model.EmployerUser;
import gigstarter.api.model.Job;
import gigstarter.api.model.StudentUser;
import gigstarter.api.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobService {

    @Autowired
    EmailService emailService;

    @Autowired
    UserService userService;

    @Autowired
    JobRepository jobRepository;

    public EmployerUser employerUser(Job job){
        return job.getEmployer();
    }

    public Job find(Long id){
        return jobRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id " + id));
    }

    public String create(Job job, EmployerUser employerUser){

        if(!employerUser.isEnabled()){
            throw new InvalidEmailException("Please confirm your e-mail before posting any gigs.");
        }

        job.setEmployer(employerUser);
        jobRepository.save(job);
        return ("Your job "+job.getTitle()+" have been added to our list of gigs.");
    }

    public void apply(StudentUser user, Job job){

        // Check if user has confirmed e-mail address
        if(!user.isEnabled()){
            throw new ForbiddenActionException("You must confirm your e-mail address before you may apply for jobs.");
        }

        studentApplyEmail(user, job);
        employerApplyEmail(user, job);
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

    private void employerApplyEmail(StudentUser student, Job job){

        String emailSubject = student.getFirstName() + " applied to your gig \""+job.getTitle()+"\"";

        String emailContent = "Someone has applied to your gig! Below you will find the student information and the " +
                "best form of contact. If the student is a perfect fit, please send the student more information " +
                "regarding the gig. We deeply appreciate your support through Gigstarter and we hope to see more " +
                "gigs from you soon! Thank you\n\n\n";

        emailContent += "" +
                "\nName: "+student.getFirstName()+" "+student.getLastName() +
                "\nE-mail: " + student.getEmail() +
                "\nMajor: "+ student.getMajor() +
                "\nYear: "+student.getYear() +
                "\nSchool: "+student.getschool() +
                "\nIndustry: "+student.getindustry() +
                "\n\n\n";

        EmployerUser emp = job.getEmployer();

        if(emp == null){
            throw new ResourceNotFoundException("Error! The gig applied for does not have a valid employer." +
                    "Please apply for a different gig and contact the Gigstarter staff if the problem continues.");
        }

        emailService.sendMailToUser(emp, emailSubject, emailContent);
    }

}
