package gigstarter.api.repository;


import gigstarter.api.model.ApplicationUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long> {

    ApplicationUser findByEmail(String email);

    @Override
    ApplicationUser getOne(Long aLong);
}