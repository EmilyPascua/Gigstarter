package com.example.demo.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "jobs")
public class Job extends AuditModel {
    @Id
    @GeneratedValue(generator = "job_generator")
    @SequenceGenerator(
            name = "job_generator",
            sequenceName = "job_sequence",
            initialValue = 1000
    )
    private Long id;

    @NotBlank
    @Size(min = 3, max = 100)
    private String title;

    @Column(columnDefinition = "text")
    private String description;

    @Column(columnDefinition = "text")
    private String major;

    @Column(columnDefinition = "text")
    private String industry;

    @Column(columnDefinition = "text")
    private String location;

    @Column(columnDefinition = "integer")
    private Integer payout;

    // Getters and Setters
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public String getIndustry() {
        return industry;
    }

    public void setIndustry(String industry) {
        this.industry = industry;
    }
    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getPayout() {
        return payout;
    }

    public void setPayout(Integer payout) {
        this.payout = payout;
    }
}