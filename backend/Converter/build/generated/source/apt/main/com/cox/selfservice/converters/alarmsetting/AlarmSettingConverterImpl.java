package com.cox.selfservice.converters.alarmsetting;

import com.cox.selfservice.dao.entity.alarmsetting.AlarmSettingDAO;
import com.cox.selfservice.dao.entity.alarmsetting.StatusDAO;
import com.cox.selfservice.dto.alarmsetting.AlarmSettingDTO;
import com.cox.selfservice.dto.alarmsetting.StatusDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2021-10-22T10:23:19+0530",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-6.8.jar, environment: Java 13.0.7 (Private Build)"
)
@Component
public class AlarmSettingConverterImpl implements AlarmSettingConverter {

    @Override
    public AlarmSettingDAO convertToEntity(AlarmSettingDTO dto) {
        if ( dto == null ) {
            return null;
        }

        AlarmSettingDAO alarmSettingDAO = new AlarmSettingDAO();

        alarmSettingDAO.setId( dto.getId() );
        alarmSettingDAO.setCreatedBy( dto.getCreatedBy() );
        alarmSettingDAO.setCreatedDate( dto.getCreatedDate() );
        alarmSettingDAO.setModifiedBy( dto.getModifiedBy() );
        alarmSettingDAO.setModifiedDate( dto.getModifiedDate() );
        alarmSettingDAO.setEventId( dto.getEventId() );
        alarmSettingDAO.setSeverity( dto.getSeverity() );
        alarmSettingDAO.setServiceName( dto.getServiceName() );
        alarmSettingDAO.setNeType( dto.getNeType() );
        alarmSettingDAO.setAlertGroup( dto.getAlertGroup() );
        alarmSettingDAO.setNode( dto.getNode() );
        alarmSettingDAO.setAlarmAction( dto.getAlarmAction() );
        if ( dto.getType() != null ) {
            alarmSettingDAO.setType( Integer.parseInt( dto.getType() ) );
        }
        alarmSettingDAO.setEscalation( dto.getEscalation() );
        alarmSettingDAO.setAgent( dto.getAgent() );
        alarmSettingDAO.setVendor( dto.getVendor() );
        if ( dto.getSoakTime() != null ) {
            alarmSettingDAO.setSoakTime( dto.getSoakTime() );
        }
        alarmSettingDAO.setEscalationTally( dto.getEscalationTally() );
        alarmSettingDAO.setHlpTicket( dto.getHlpTicket() );
        alarmSettingDAO.setStatus( statusDTOToStatusDAO( dto.getStatus() ) );
        alarmSettingDAO.setVersion( dto.getVersion() );

        return alarmSettingDAO;
    }

    @Override
    public AlarmSettingDTO convertToDto(AlarmSettingDAO entity) {
        if ( entity == null ) {
            return null;
        }

        AlarmSettingDTO alarmSettingDTO = new AlarmSettingDTO();

        alarmSettingDTO.setId( entity.getId() );
        alarmSettingDTO.setCreatedBy( entity.getCreatedBy() );
        alarmSettingDTO.setCreatedDate( entity.getCreatedDate() );
        alarmSettingDTO.setModifiedBy( entity.getModifiedBy() );
        alarmSettingDTO.setModifiedDate( entity.getModifiedDate() );
        alarmSettingDTO.setVersion( entity.getVersion() );
        alarmSettingDTO.setEventId( entity.getEventId() );
        alarmSettingDTO.setSeverity( entity.getSeverity() );
        alarmSettingDTO.setServiceName( entity.getServiceName() );
        alarmSettingDTO.setNeType( entity.getNeType() );
        alarmSettingDTO.setAlertGroup( entity.getAlertGroup() );
        alarmSettingDTO.setNode( entity.getNode() );
        alarmSettingDTO.setAlarmAction( entity.getAlarmAction() );
        if ( entity.getType() != null ) {
            alarmSettingDTO.setType( String.valueOf( entity.getType() ) );
        }
        alarmSettingDTO.setEscalation( entity.getEscalation() );
        alarmSettingDTO.setAgent( entity.getAgent() );
        alarmSettingDTO.setVendor( entity.getVendor() );
        alarmSettingDTO.setSoakTime( entity.getSoakTime() );
        alarmSettingDTO.setEscalationTally( entity.getEscalationTally() );
        alarmSettingDTO.setHlpTicket( entity.getHlpTicket() );
        alarmSettingDTO.setStatus( statusDAOToStatusDTO( entity.getStatus() ) );

        return alarmSettingDTO;
    }

    @Override
    public List<AlarmSettingDAO> convertToEntities(List<AlarmSettingDTO> dtos) {
        if ( dtos == null ) {
            return null;
        }

        List<AlarmSettingDAO> list = new ArrayList<AlarmSettingDAO>( dtos.size() );
        for ( AlarmSettingDTO alarmSettingDTO : dtos ) {
            list.add( convertToEntity( alarmSettingDTO ) );
        }

        return list;
    }

    @Override
    public List<AlarmSettingDTO> convertToDtos(List<AlarmSettingDAO> entities) {
        if ( entities == null ) {
            return null;
        }

        List<AlarmSettingDTO> list = new ArrayList<AlarmSettingDTO>( entities.size() );
        for ( AlarmSettingDAO alarmSettingDAO : entities ) {
            list.add( convertToDto( alarmSettingDAO ) );
        }

        return list;
    }

    protected StatusDAO statusDTOToStatusDAO(StatusDTO statusDTO) {
        if ( statusDTO == null ) {
            return null;
        }

        StatusDAO statusDAO;

        switch ( statusDTO ) {
            case New: statusDAO = StatusDAO.New;
            break;
            case Editing: statusDAO = StatusDAO.Editing;
            break;
            case Review_Requested: statusDAO = StatusDAO.Review_Requested;
            break;
            case Scheduled: statusDAO = StatusDAO.Scheduled;
            break;
            case Immediate: statusDAO = StatusDAO.Immediate;
            break;
            case Daily: statusDAO = StatusDAO.Daily;
            break;
            case Active: statusDAO = StatusDAO.Active;
            break;
            case Error: statusDAO = StatusDAO.Error;
            break;
            case Cancelled: statusDAO = StatusDAO.Cancelled;
            break;
            default: throw new IllegalArgumentException( "Unexpected enum constant: " + statusDTO );
        }

        return statusDAO;
    }

    protected StatusDTO statusDAOToStatusDTO(StatusDAO statusDAO) {
        if ( statusDAO == null ) {
            return null;
        }

        StatusDTO statusDTO;

        switch ( statusDAO ) {
            case New: statusDTO = StatusDTO.New;
            break;
            case Editing: statusDTO = StatusDTO.Editing;
            break;
            case Review_Requested: statusDTO = StatusDTO.Review_Requested;
            break;
            case Scheduled: statusDTO = StatusDTO.Scheduled;
            break;
            case Immediate: statusDTO = StatusDTO.Immediate;
            break;
            case Daily: statusDTO = StatusDTO.Daily;
            break;
            case Active: statusDTO = StatusDTO.Active;
            break;
            case Error: statusDTO = StatusDTO.Error;
            break;
            case Cancelled: statusDTO = StatusDTO.Cancelled;
            break;
            default: throw new IllegalArgumentException( "Unexpected enum constant: " + statusDAO );
        }

        return statusDTO;
    }
}
