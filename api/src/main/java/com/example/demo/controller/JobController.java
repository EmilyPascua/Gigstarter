package com.example.demo.controller;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Job;
import com.example.demo.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
public class JobController {

    @Autowired
    private JobRepository jobRepository;

    @GetMapping("/jobs")
    public Page<Job> getJobs(Pageable pageable) {
        return jobRepository.findAll(pageable);
    }


    @PostMapping("/jobs")
    public Job createJob(@Valid @RequestBody Job job) {
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
}