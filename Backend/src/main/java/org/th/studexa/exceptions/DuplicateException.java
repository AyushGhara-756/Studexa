package org.th.studexa.exceptions;

public class DuplicateException extends RuntimeException{
    public DuplicateException(String entity, String property){
        super("Another "+entity + " exists with "+property);
    }
}
