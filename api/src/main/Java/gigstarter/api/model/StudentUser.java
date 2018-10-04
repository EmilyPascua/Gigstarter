package gigstarter.api.model;

import javax.persistence.Entity;

@Entity
public class StudentUser extends ApplicationUser {

    private String major;

    private int year;

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
}
