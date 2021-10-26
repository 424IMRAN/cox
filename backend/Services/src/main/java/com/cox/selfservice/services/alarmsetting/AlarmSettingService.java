package com.cox.selfservice.services.alarmsetting;

import com.cox.selfservice.dto.alarmsetting.AlarmSettingDTO;
import com.cox.selfservice.dto.alarmsetting.AlarmSettingEditDTO;
import com.cox.selfservice.dto.base.Response;
import com.cox.selfservice.services.base.GenericService;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface AlarmSettingService extends GenericService<AlarmSettingDTO, String> {




    Response<AlarmSettingEditDTO> update(AlarmSettingEditDTO dto);

    Response<AlarmSettingEditDTO> schedule(AlarmSettingEditDTO dto);

    Response<AlarmSettingDTO> findById(String id, String user);

    Response<AlarmSettingDTO> delete(String s, String user);

    Response<List<AlarmSettingDTO>> search(String keyword, Pageable pageable);


}
