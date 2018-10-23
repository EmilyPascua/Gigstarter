package gigstarter.api.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Calendar;
import java.util.Random;

@Entity
public class VerificationToken {

    private static final int EXPIRATION = 60 * 24; // Token expiration time in minutes
    private static final int CONTROL_NUMBER_LENGTH = 32; // Number of random alphanumerics placed at the end of token

    @Id
    private long id;

    @OneToOne
    @JoinColumn(name = "id")
    @MapsId
    private ApplicationUser user;

    private String token;

    @DateTimeFormat
    private LocalDateTime expirationDate;

    private boolean encoded;

    public VerificationToken(){
        this.expirationDate = calculateExpiryDate(EXPIRATION);
    }

    public long getId(){
        return id;
    }

    public void setUser(ApplicationUser user){
        this.user = user;
        this.token = generateToken(CONTROL_NUMBER_LENGTH);
        encoded = false;
    }

    private LocalDateTime calculateExpiryDate(int expiryTimeInMinutes) {
        return LocalDateTime.now().plusMinutes(EXPIRATION);
    }

    private String generateToken(int controlNumberLength){

        String idHash = String.valueOf(user.getId());
        String emailHash = stringHash(user.getEmail());

        String random = randomAlphaNumeric(controlNumberLength);
        String token = "" + idHash + emailHash + random;
        return token;
    }

    public String getUrl(){
        if(!encoded){
            return "http://localhost:8080/users/email/verify" +
                    "?token="+token;
        }
        else return null;
    }

    public ApplicationUser getUser() {
        return user;
    }

    public String getToken() {
        return token;
    }

    public LocalDateTime getExpirationDate(){
        return expirationDate;
    }

    public boolean isValid(){
        return(!hasExpired() && encoded);
    }

    public boolean hasExpired(){
        LocalDateTime now = LocalDateTime.now();
        return !now.isBefore(expirationDate);
    }

    public void setToken(String token){
        this.token = token;
    }
    public void setEncoded(boolean encoded){
        this.encoded = encoded;
    }
    public boolean isEncoded(){
        return encoded;
    }


    private String randomAlphaNumeric(int length){
        Random random = new Random();
        String alphaNumerics = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        String string = "";
        while(string.length() < length){
            string += alphaNumerics.charAt(random.nextInt(alphaNumerics.length()));
        }
        return string;
    }

    private String stringHash(String string){

        String numbers = "0123456789";
        String hash = "";

        for(char c: string.toCharArray()){
            int index = Byte.toUnsignedInt( (byte) c);
            hash += numbers.charAt(index % 10);
        }

        return hash;
    }


}
