package com.cox.selfservice.services.base;

import java.io.Serializable;
import java.util.List;

import com.cox.selfservice.dto.base.Response;
import org.springframework.data.domain.Pageable;

/**
 *
 * @param <D> DTO Object
 * @param <ID> DAO Object
 * @author Mohammed Shoukath Ali
 */
public interface GenericService<D, ID extends Serializable> {


    //CRUD Operations
    Response<D> save(D dto);
    Response<D> save(D dto, String user);
    Response<List<D>> save(List<D> dtos, String user);
    Response<D> findById(ID id, String user);
    Response<List<D>> findAll(Pageable pageable);
    Response<D> delete(ID id, String user);
    void isUserEntitled(ID id, String user);


}
