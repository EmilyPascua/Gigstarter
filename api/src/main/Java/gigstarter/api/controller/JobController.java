package gigstarter.api.controller;

import gigstarter.api.exception.ResourceNotFoundException;
import gigstarter.api.model.ApplicationUser;
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

@RestController
public class JobController {

    @Autowired
    AuthService authService;

    @Autowired
    JobService jobService;

    @Autowired
    private JobRepository jobRepository;

    @GetMapping("/jobs")
    public Page<Job> getJobs(Pageable pageable) {
        return jobRepository.findAll(pageable);
    }


    @PostMapping("/jobs")
    public Job createJob(@Valid @RequestBody Job job) {
        System.out.println(job.getCreatedAt());
        return jobRepository.save(job);
    }

    @PutMapping("/jobs/{jobId}")
    public Job updateJob(@PathVariable Long jobId,
                                   @Valid @RequestBody Job jobRequest) {
        return jobRepository.findById(jobId)
                .map(job -> {
                    job.setTitle(jobRequest.getTitle());
                    job.setDescription(jobRequest.getDescription());
                    return jobRepository.save(job);
                }).orElseThrow(() -> new ResourceNotFoundException("Job not found with id " + jobId));
    }


    @DeleteMapping("/jobs/{jobId}")
    public ResponseEntity<?> deleteJob(@PathVariable Long jobId) {
        return jobRepository.findById(jobId)
                .map(job -> {
                    jobRepository.delete(job);
                    return ResponseEntity.ok().build();
                }).orElseThrow(() -> new ResourceNotFoundException("Job not found with id " + jobId));
    }

    @PostMapping("/jobs/apply/{jobId}")
    public String applyForJob(@PathVariable Long jobId){

        Job j = jobRepository.findById(jobId)
                .orElseThrow(() -> new ResourceNotFoundException("Job not found with id " + jobId));

        ApplicationUser user = authService.getUser();

        jobService.apply(user, j);

        String res = "You have applied for the job "+j.getTitle()+".";
        if(user.emailNotificationsEnabled()){
            res += " You should receive an e-mail shortly containing the details of the gig.";
        }
        else{
            res += " If you and the employer match, then they will contact you by e-mail.";
        }
        return res;
    }

}