package com.cox.selfservice.rest.alarmsetting;


import com.cox.selfservice.dto.alarmsetting.AlarmSettingDTO;
import com.cox.selfservice.dto.alarmsetting.AlarmSettingEditDTO;
import com.cox.selfservice.dto.base.Response;
import com.cox.selfservice.rest.base.BaseController;
import com.cox.selfservice.services.alarmsetting.AlarmSettingService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.List;

import static com.cox.selfservice.rest.base.BaseController.ALARM_SETTING;

@CrossOrigin
@RestController
@RequestMapping(ALARM_SETTING)
@Validated
public class AlarmSettingController extends BaseController {

    final protected Logger logger = LoggerFactory.getLogger(getClass());



    private AlarmSettingService alarmSettingService;

    @Autowired
    public AlarmSettingController(
            AlarmSettingService alarmSettingService) {
        this.alarmSettingService = alarmSettingService;
    }


    @RequestMapping(value = "", method = RequestMethod.GET)
    public Response<List<AlarmSettingDTO>> findAll(@RequestParam(value = PAGE_PARAM, defaultValue = DEFAULT_PAGE_VALUE, required = false) @Min(0) Integer page,
                                                   @RequestParam(value = PAGE_SIZE_PARAM, defaultValue = DEFAULT_PAGE_SIZE_VALUE, required = false) @Min(1) @Max(100) Integer pageSize) {
        //TODO Add logger statements
        return alarmSettingService.findAll(PageRequest.of(page, pageSize, DEFAULT_SORT));

    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Response<AlarmSettingDTO> findById(@PathVariable("id") String id) {
        //TODO Add logger statements
        return alarmSettingService.findById(id, "");

    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public Response<AlarmSettingDTO> createAlarmSetting(@Valid @RequestBody AlarmSettingDTO alarmSetting) {
        //TODO Add logger statements
        return alarmSettingService.save(alarmSetting);
    }

    @RequestMapping(value = "", method = RequestMethod.PUT)
    public Response<AlarmSettingEditDTO> editAlarmSetting(@Valid @RequestBody AlarmSettingEditDTO alarmSettingEditDTO) {
        //TODO Add logger statements
        // TODO Add Authentication and Authorization
        return alarmSettingService.update(alarmSettingEditDTO);
    }

    @RequestMapping(value = "/schedule", method = RequestMethod.PUT)
    public Response<AlarmSettingEditDTO> scheduleAlarmSetting(@Valid @RequestBody AlarmSettingEditDTO alarmSettingEditDTO) {
        //TODO Add logger statements
        // TODO Add Authentication and Authorization
        return alarmSettingService.schedule(alarmSettingEditDTO);
    }
}
