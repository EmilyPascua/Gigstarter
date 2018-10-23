package gigstarter.api.repository;

import gigstarter.api.model.ApplicationUser;
import gigstarter.api.model.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

    VerificationToken getByToken(String token);

    void deleteVerificationTokenByToken(String token);

    void deleteVerificationTokenByUser(ApplicationUser user);

    boolean existsByToken(String token);

    void deleteVerificationTokenById(Long id);

}