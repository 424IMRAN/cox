package com.cox.selfservice.dao.entity.base;


import lombok.Data;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;


/**
 * @author Mohammed Shoukath Ali
 */

@MappedSuperclass

@Data
@EqualsAndHashCode(of = {"id"})
public class BasicBaseEntity implements Serializable{
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    protected String id;
}
