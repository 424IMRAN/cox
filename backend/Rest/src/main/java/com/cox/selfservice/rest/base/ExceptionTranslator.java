package com.cox.selfservice.rest.base;

import com.cox.selfservice.dto.base.Message;
import com.cox.selfservice.dto.base.MessageType;
import com.cox.selfservice.dto.base.Response;
import com.cox.selfservice.services.exceptions.SelfServiceException;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Component;

import java.util.UUID;

/**
 * @author Mohammed Shoukath Ali
 */
@Aspect
@Component
public class ExceptionTranslator {

    final Logger logger = LoggerFactory.getLogger(getClass());

    @Around("bean(*Controller)")
    public Object handle(ProceedingJoinPoint pjp) throws Throwable {
        UUID uuid = UUID.randomUUID();
        String uuidAsString = uuid.toString();
        try {
            Object retVal = pjp.proceed();
            return retVal;
        } catch (SelfServiceException e) {
            logger.warn(e.getLocalizedMessage());
            return new Response<>().withErrors(true).withMessage(new Message(MessageType.ERROR, "", e.getLocalizedMessage()));
        } catch (DataIntegrityViolationException e) {
            logger.warn(e.getLocalizedMessage());
            return new Response<>().withErrors(true).withMessage(new Message(MessageType.ERROR, "", "Resource name or key already exists."));
        } catch (IllegalArgumentException e) {
            logger.warn(e.getLocalizedMessage(), "Request Id : " + uuidAsString + " " + e);
            Response response = new Response<>().withErrors(true).withMessage(new Message(MessageType.ERROR, "", ""));
            response.setRequestId(uuidAsString);
            return response;
        } catch (Exception e) {
            logger.warn(e.getLocalizedMessage(), "Request Id : " + uuidAsString + " " + e);
            Response response = new Response<>().withErrors(true).withMessage(new Message(MessageType.ERROR, "", ""));
            response.setRequestId(uuidAsString);
            return response;
        }
    }
}
