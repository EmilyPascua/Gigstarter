package gigstarter.api.repository;

import gigstarter.api.model.StudentUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentUserRepository extends JpaRepository<StudentUser, Long> {

    StudentUser findByEmail(String email);

}