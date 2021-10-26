package com.cox.selfservice.dto.alarmsetting;

import com.cox.selfservice.dto.base.BaseDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * @author Mohammed Shoukath Ali
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class AlarmSettingEditDTO extends BaseDto {


    private Integer severity;
    private String alarmAction;
    private Integer soakTime;

    private Integer escalationTally;
    private String hlpTicket;
}
