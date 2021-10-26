package com.cox.selfservice;

import org.springframework.data.domain.AuditorAware;

import java.util.Optional;

/**
 * @author Mohammed Shoukath Ali
 */
public class AuditorAwareImpl implements AuditorAware<String> {

    private Optional<String> auditor = Optional.empty();

    /**
     * @param auditor the auditor to set
     */
    public void setAuditor(String auditor) {
        this.auditor = Optional.of(auditor);
    }

    /*
     * (non-Javadoc)
     * @see org.springframework.data.domain.AuditorAware#getCurrentAuditor()
     */
    public Optional<String> getCurrentAuditor() {
        //TODO after security integration
        return Optional.of("Admin");
    }
}
