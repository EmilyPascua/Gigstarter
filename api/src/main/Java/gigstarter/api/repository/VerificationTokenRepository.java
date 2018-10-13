package gigstarter.api.repository;

import gigstarter.api.model.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {

    @Override
    default <S extends VerificationToken> S save(S s) {
        return null;
    }

    @Override
    default Optional<VerificationToken> findById(Long aLong) {
        return Optional.empty();
    }

    @Override
    default boolean existsById(Long aLong) {
        return false;
    }
}