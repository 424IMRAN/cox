package com.cox.selfservice;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

/**
 * @author Mohammed Shoukath Ali
 */
@Configuration
@EnableJpaAuditing
public class AuditConfig {

    @Bean
    AuditorAwareImpl auditorAware() {
        return new AuditorAwareImpl();
    }

}

