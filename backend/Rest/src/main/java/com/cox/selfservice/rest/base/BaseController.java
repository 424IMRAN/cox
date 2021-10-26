package com.cox.selfservice.rest.base;

import com.cox.selfservice.services.base.GenericService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Sort;

import java.io.Serializable;

/**
 * @author Mohammed Shoukath Ali
 */
public abstract class BaseController<D, ID extends Serializable> {

    public static final String API_BASE = "/api/v1";
    public static final String ALARM_SETTING = API_BASE + "/alarm-setting";

    public static final Sort SORT_BY_CREATE_DT = Sort.by(Sort.Direction.DESC, "createdDate");

    public static final String ROLE_USER = "ROLE_USER";
    public static final String ROLE_ADMIN = "ROLE_ADMIN";
    public static final String ROLE_BASIC = "ROLE_BASIC";

    public final Logger logger = LoggerFactory.getLogger(getClass());
    public static final String PAGE_PARAM = "page";
    public static final String PAGE_SIZE_PARAM = "pageSize";
    public static final String DEFAULT_PAGE_VALUE = "0";
    public static final String DEFAULT_PAGE_SIZE_VALUE = "20";
    public static final String DEFAULT_MAX_PAGE_SIZE_VALUE = "100";
    public static final String DEFAULT_1k_PAGE_SIZE_VALUE = "1000";

    public static final Sort DEFAULT_SORT = Sort.by(Sort.Direction.DESC, "modifiedDate", "createdDate");
    public static final Sort CREATED_DATE_SORT = Sort.by(Sort.Direction.DESC,  "createdDate","modifiedDate");

    protected GenericService<D, ID> service;
}
