package com.cox.selfservice.converters.alarmsetting;


import com.cox.selfservice.dto.alarmsetting.AlarmSettingDTO;
import com.cox.selfservice.converters.base.BaseConverter;
import com.cox.selfservice.dao.entity.alarmsetting.AlarmSettingDAO;
import org.mapstruct.Mapper;

/**
 * @author Mohammed Shoukath Ali
 *
 */

@Mapper(componentModel = "spring")
public interface AlarmSettingConverter extends BaseConverter<AlarmSettingDAO, AlarmSettingDTO> {

}
