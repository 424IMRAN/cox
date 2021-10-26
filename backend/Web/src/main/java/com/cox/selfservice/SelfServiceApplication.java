package com.cox.selfservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.cox.selfservice.dao.repository.jpa")
@ComponentScan(basePackages = {"com.cox.selfservice"})
@EnableCaching
public class SelfServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SelfServiceApplication.class, args);
	}

}
