package org.th.studexa.exceptions;

public class FIleSizeException extends RuntimeException {
    public FIleSizeException(String fileName) {
        super(fileName + " exceeds the file size limit");
    }
}
