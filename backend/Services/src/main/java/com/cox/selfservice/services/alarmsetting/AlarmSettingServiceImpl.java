package com.cox.selfservice.services.alarmsetting;

import com.cox.selfservice.converters.alarmsetting.AlarmSettingConverter;
import com.cox.selfservice.dao.entity.alarmsetting.StatusDAO;
import com.cox.selfservice.dto.alarmsetting.AlarmSettingDTO;
import com.cox.selfservice.dto.alarmsetting.AlarmSettingEditDTO;
import com.cox.selfservice.dto.alarmsetting.StatusDTO;
import com.cox.selfservice.dto.base.Response;
import com.cox.selfservice.dao.entity.alarmsetting.AlarmSettingDAO;
import com.cox.selfservice.dao.repository.jpa.AlarmSettingRepository;
import com.cox.selfservice.services.base.GenericServiceImpl;
import com.cox.selfservice.services.exceptions.SelfServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class AlarmSettingServiceImpl extends GenericServiceImpl<AlarmSettingDAO, AlarmSettingDTO, String> implements AlarmSettingService{

    private AlarmSettingRepository alarmSettingRepository;
    private AlarmSettingConverter alarmSettingConverter;

    @Autowired
    public AlarmSettingServiceImpl(AlarmSettingRepository alarmSettingRepository, AlarmSettingConverter alarmSettingConverter) {
        super(alarmSettingRepository, alarmSettingConverter);

        this.alarmSettingConverter = alarmSettingConverter;
        this.alarmSettingRepository = alarmSettingRepository;
    }


    @Override
    public Response<List<AlarmSettingDTO>> findAll(Pageable pageable) {
        Page<AlarmSettingDAO> page = this.repository.findAll(pageable);
        List<AlarmSettingDTO> alarmSettingsDtos = alarmSettingConverter.convertToDtos(page.getContent());
        return new Response<>(alarmSettingsDtos, page.getTotalElements(), page.getTotalPages());
    }


    @Override
    public Response<AlarmSettingEditDTO> update(AlarmSettingEditDTO dto) {
        AlarmSettingDAO alarmSettingDAO = validateEditAlarmSettingDto(dto);

         alarmSettingDAO.setAlarmAction(dto.getAlarmAction());
         alarmSettingDAO.setEscalationTally(dto.getEscalationTally());
         alarmSettingDAO.setHlpTicket(dto.getHlpTicket());
         alarmSettingDAO.setSoakTime(dto.getSoakTime());
         alarmSettingDAO.setSeverity(dto.getSeverity());
         alarmSettingDAO.setStatus(StatusDAO.Editing);

        repository.save(alarmSettingDAO);

        return new Response<>(dto);
    }

    @Override
    public Response<AlarmSettingEditDTO> schedule(AlarmSettingEditDTO dto) {
        //TODO
        return new Response<>(dto);
    }

    private AlarmSettingDAO validateEditAlarmSettingDto(AlarmSettingEditDTO dto) {
        if (StringUtils.hasLength(dto.getId())) {
            throw new SelfServiceException("Invalid Alarm Setting");
        }

        Optional<AlarmSettingDAO> optionalAlarmSettingDAO = repository.findById(dto.getId());
        if (optionalAlarmSettingDAO.isEmpty()) {
            throw new SelfServiceException("Invalid Alarm Setting");
        }
        return optionalAlarmSettingDAO.get();
    }


    @Override
    public void isUserEntitled(String s, String user) {
        //TODO
    }

    @Override
    public Response<List<AlarmSettingDTO>> search(String keyword, Pageable pageable) {
        //TODO
        return null;
    }
}
