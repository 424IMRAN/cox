package com.cox.selfservice.dao.entity.alarmsetting;

import com.cox.selfservice.dao.entity.base.BaseEntity;
import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
@Table(name = "alarm_setting")
public class AlarmSettingDAO extends BaseEntity {


    @Column(name = "event_id", nullable = false)
    private String eventId;

    @Column(name = "severity", nullable = false)
    private Integer severity;

    @Column(name = "service_name", nullable = false)
    private String serviceName;

    @Column(name = "ne_type", nullable = false)
    private String neType;

    @Column(name = "alert_group")
    private String alertGroup;

    @Column(name = "node")
    private String node;

    @Column(name = "alarm_action")
    private String alarmAction;

    @Column(name = "type", nullable = false)
    private Integer type;

    @Column(name = "escalation", nullable = false)
    private String escalation;

    private String agent;

    private String vendor;

    private int soakTime;

    @Column(name = "escalation_tally", nullable = false)
    private Integer escalationTally;

    private String hlpTicket;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private StatusDAO status;

    @Column(name = "version")
    private String version;

    private String approvedBy;

}
