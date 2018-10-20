package gigstarter.api.model;

import javax.persistence.Entity;

@Entity
public class StudentUser extends ApplicationUser {

    private String major;

    private int year;

    private String industry;

    private String school;

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getindustry() {
        return industry;
    }

    public void setindustry(String industry) {
        this.industry = industry;
    }

    public String getschool() {
        return school;
    }

    public void setschool(String school) {
        this.school = school;
    }
}
