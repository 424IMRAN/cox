package com.cox.selfservice.dao.repository.jpa;

import com.cox.selfservice.dao.entity.alarmsetting.AlarmSettingDAO;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author Mohammed Shoukath Ali
 */
public interface AlarmSettingRepository extends JpaRepository<AlarmSettingDAO, String> {
}
