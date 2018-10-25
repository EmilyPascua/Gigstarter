package gigstarter.api.controller;

import gigstarter.api.exception.ForbiddenActionException;
import gigstarter.api.exception.ResourceNotFoundException;
import gigstarter.api.model.EmployerUser;
import gigstarter.api.model.Job;
import gigstarter.api.model.StudentUser;
import gigstarter.api.repository.JobRepository;
import gigstarter.api.service.AuthService;
import gigstarter.api.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.nio.file.AccessDeniedException;
import java.util.Optional;

@RestController
@RequestMapping("/jobs")
public class JobController {

    @Autowired
    AuthService authService;

    @Autowired
    JobService jobService;

    @Autowired
    private JobRepository jobRepository;

    @GetMapping("/{jobId]")
    public Optional<Job> getJob(@PathVariable Long jobId){
        return jobRepository.findById(jobId);
    }

    @GetMapping()
    public Page<Job> getJobs(Pageable pageable) {
        return jobRepository.findAll(pageable);
    }


    @PostMapping("/create")
    public String createJob(@Valid @RequestBody Job job) {

        EmployerUser emp = null;
        if(!authService.isEmployerUser()){
            throw new ForbiddenActionException("Only employer users may post jobs.");
        }
        else{
            emp = (EmployerUser) authService.getUser();
            return jobService.create(job, emp);
        }

    }

    @PutMapping("/{jobId}")
    public Job updateJob(@PathVariable Long jobId,
                                   @Valid @RequestBody Job jobRequest) {
        if(!authService.jobBelongsToUser(jobId)){
            throw new ForbiddenActionException("Attempted to update a gig that did not belong to the authenticated " +
                    "user.");
        }
        return jobRepository.findById(jobId)
                .map(job -> {
                    job.setTitle(jobRequest.getTitle());
                    job.setDescription(jobRequest.getDescription());
                    return jobRepository.save(job);
                }).orElseThrow(() -> new ResourceNotFoundException("Job not found with id " + jobId));
    }


    @DeleteMapping("/{jobId}")
    public ResponseEntity<?> deleteJob(@PathVariable Long jobId) {
        if(!authService.jobBelongsToUser(jobId)){
            throw new ForbiddenActionException("Attemped to delete a gig that did not belong to the authenticated user.");
        }
        return jobRepository.findById(jobId)
                .map(job -> {
                    jobRepository.delete(job);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Job not found with id " + jobId));
    }

    @PostMapping("/apply/{jobId}")
    public String applyForJob(@PathVariable Long jobId){

        if(!authService.isStudentUser()){
            throw new ForbiddenActionException("Only students may apply for gigs.");
        }

        StudentUser user = (StudentUser) authService.getUser();
        Job job = jobService.find(jobId);
        jobService.apply(user, job);

        String res = "You have applied for the job "+job.getTitle()+".";

        if(user.emailNotificationsEnabled()){
            res += " You should receive an e-mail shortly containing the details of the gig.";
        }
        else{
            res += " If you and the employer match, then they will contact you by e-mail.";
        }
        return res;
    }

}