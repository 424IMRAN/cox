-- @author Mohammed Shoukath Ali
-- Script to create alarm setting table

create table alarm_setting (
       id varchar2(255),
        created_by varchar2(255),
        created_date date not null,
        modified_by varchar2(255),
        modified_date date,
        agent varchar2(255) not null,
        alarm_action varchar2(255),
        alarmsetting_id varchar2(255),
        alert_group varchar2(255),
        approved_by varchar2(255),
        escalation varchar2(255) not null,
        escalation_tally number(10,0) not null,
        event_id varchar2(255) not null,
        hlp_ticket varchar2(255),
        ne_type varchar2(255) not null,
        node varchar2(255),
        service_name varchar2(255) not null,
        severity number(10,0) not null,
        soak_time number(10,0) not null,
        status varchar2(255) not null,
        type number(10,0) not null,
        vendor varchar2(255),
        version varchar2(255),
        primary key (id)
    )
