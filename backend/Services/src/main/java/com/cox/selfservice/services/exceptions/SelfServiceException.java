package com.cox.selfservice.services.exceptions;


/**
 * @author Mohammed Shoukath Ali
 */
public class SelfServiceException extends RuntimeException {
    static final long serialVersionUID = 1L;

    public SelfServiceException() {
        super("User not authorized to the resource.");
    }

    public SelfServiceException(String msg) {
        super(msg);
    }

}
