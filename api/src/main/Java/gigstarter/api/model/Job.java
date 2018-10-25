package gigstarter.api.model;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Job{

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long id;

  @NotBlank
  @Size(min = 3, max = 100)
  private String title;

  @NotBlank
  private String description;

  private String major;

  private String industry;

  private String location;

  @NotNull
  private Integer payout;

  @ManyToOne
  private EmployerUser employerUser;

  @ManyToOne
  private StudentUser studentUser;

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

  public EmployerUser getEmployer() {
    return employerUser;
  }

  public void setEmployer(EmployerUser employer) {
    this.employerUser = employer;
  }

  public StudentUser getStudentId() {
    return studentUser;
  }

  public void setStudent(StudentUser student) {
    this.studentUser = student;
  }
}