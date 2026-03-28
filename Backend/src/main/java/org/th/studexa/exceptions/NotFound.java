package org.th.studexa.exceptions;

public class NotFound extends RuntimeException {
    public NotFound(String resource) {
        super(resource + " not found");
    }
}
