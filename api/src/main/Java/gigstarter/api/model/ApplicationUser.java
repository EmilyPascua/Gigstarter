package gigstarter.api.model;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class ApplicationUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @Column(unique = true, nullable = false)
    @Email
    private String email;

    @Column(nullable = false)
    @Length(min = 6)
    private String password;

    private boolean enabled;

    private String firstName;
    private String lastName;

    public ApplicationUser(){
        enabled = false;
    }

    public long getId() {
        return id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email= email;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setEnabled(boolean enabled){
        this.enabled = enabled;
    }
}