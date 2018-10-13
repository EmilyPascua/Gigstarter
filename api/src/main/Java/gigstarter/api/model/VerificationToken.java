package gigstarter.api.model;

import javax.persistence.*;
import java.nio.charset.Charset;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Random;

@Entity
public class VerificationToken {
    private static final int EXPIRATION = 60 * 24;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne(targetEntity = ApplicationUser.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_id")
    private ApplicationUser user;

    private String token;

    public VerificationToken(ApplicationUser user){
        super();
        this.user = user;
        this.token = generateToken(32);
    }

    private Date calculateExpiryDate(int expiryTimeInMinutes) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Timestamp(cal.getTime().getTime()));
        cal.add(Calendar.MINUTE, expiryTimeInMinutes);
        return new Date(cal.getTime().getTime());
    }

    private String generateToken(int length){
        byte[] array = new byte[length];
        new Random().nextBytes(array);
        return new String(array, Charset.forName("UTF-8"));
    }

    public String getUrl(){
        return "http://localhost:8080/users/email/verify" +
                "?user_id="+Long.toString(user.getId())+
                "&token="+token;
    }

    public ApplicationUser getUser() {
        return user;
    }

    public String getToken() {
        return token;
    }

    // standard constructors, getters and setters
}
