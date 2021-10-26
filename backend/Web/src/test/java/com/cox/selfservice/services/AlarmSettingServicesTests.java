package com.cox.selfservice.services;

import com.cox.selfservice.dto.alarmsetting.AlarmSettingDTO;
import com.cox.selfservice.dto.base.Response;
import com.cox.selfservice.converters.alarmsetting.AlarmSettingConverter;
import com.cox.selfservice.dao.entity.alarmsetting.AlarmSettingDAO;
import com.cox.selfservice.dao.repository.jpa.AlarmSettingRepository;
import com.cox.selfservice.services.alarmsetting.AlarmSettingService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.*;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SpringExtension.class)
@SpringBootTest
class AlarmSettingServicesTests {


    @Autowired
    private AlarmSettingService alarmSettingService;

    @MockBean
    private AlarmSettingRepository repository;

    @MockBean
    private AlarmSettingConverter converter;

    public static final int PAGE_PARAM = 0;
    public static final int PAGE_SIZE_PARAM = 10;
    public static final Sort DEFAULT_SORT = Sort.by(Sort.Direction.DESC, "modifiedDate", "createdDate");



    @Test
    public void retrieveAllItems_basic() {

        List<AlarmSettingDAO> alarmSettings = Arrays.asList(getAlarmSetting(),
                getAlarmSetting());
        Page<AlarmSettingDAO> pagedSettings = new PageImpl(alarmSettings);
        when(repository.findAll(PageRequest.of(PAGE_PARAM, PAGE_SIZE_PARAM, DEFAULT_SORT))).thenReturn(pagedSettings);

        List<AlarmSettingDTO> alarmSettingsDtos = Arrays.asList(getDtoAlarmSetting(),
                getDtoAlarmSetting());
        when(converter.convertToDtos(alarmSettings)).thenReturn(alarmSettingsDtos);

        Response<List<AlarmSettingDTO>> items = alarmSettingService.findAll(PageRequest.of(PAGE_PARAM, PAGE_SIZE_PARAM, DEFAULT_SORT));

        assertNotEquals(0, items.getTotalElements());

    }


    private AlarmSettingDAO getAlarmSetting() {
        return new AlarmSettingDAO();
    }

    private AlarmSettingDTO getDtoAlarmSetting() {
        return new AlarmSettingDTO();
    }
}
