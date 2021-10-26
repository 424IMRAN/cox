package com.cox.selfservice.dto.alarmsetting;

import com.cox.selfservice.dto.base.BaseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class AlarmSettingDTO extends BaseDto {

        private String alarmsetttingId;

        private String eventId;

        private Integer severity;

        private String serviceName;

        private String neType;

        private String alertGroup;

        private String node;

        private String alarmAction;

        private String type;

        private String escalation;

        private String agent;

        private String vendor;

        private String scheduleTime;

        private Integer soakTime;

        private Integer escalationTally;

        private String hlpTicket;

        private StatusDTO status;
}