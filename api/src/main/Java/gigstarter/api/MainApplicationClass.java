package gigstarter.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@EnableAutoConfiguration
public class MainApplicationClass {

    @RequestMapping("/")
    String hello() {
        return "Application works!";
    }

    public static void main(String[] args) {
        SpringApplication.run(MainApplicationClass.class, args);
    }
}