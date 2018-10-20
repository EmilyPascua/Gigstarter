package gigstarter.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class InvalidEmailTokenException extends RuntimeException {

    public InvalidEmailTokenException(String message) {
        super(message);
    }

    public InvalidEmailTokenException(String message, Throwable cause) {
        super(message, cause);
    }
}