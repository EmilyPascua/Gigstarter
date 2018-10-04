package gigstarter.api.repository;

import gigstarter.api.model.EmployerUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployerUserRepository extends JpaRepository<EmployerUser, Long> {

    EmployerUser findByEmail(String email);

}