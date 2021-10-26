package com.cox.selfservice.services.base;

import com.cox.selfservice.converters.base.BaseConverter;
import com.cox.selfservice.dto.base.BaseDto;
import com.cox.selfservice.dto.base.Message;
import com.cox.selfservice.dto.base.MessageType;
import com.cox.selfservice.dto.base.Response;
import com.cox.selfservice.services.exceptions.SelfServiceException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class GenericServiceImpl<E, D, ID extends Serializable> implements GenericService<D, ID> {
    protected Logger logger = LoggerFactory.getLogger(getClass());

    protected JpaRepository<E, ID> repository;
    protected BaseConverter<E, D> converter;


    public GenericServiceImpl(JpaRepository<E, ID> repository, BaseConverter<E, D> converter){
        this.repository = repository;
        this.converter = converter;
    }

    public Response<D> save(D dto) {
        return save(dto, null);
    }


    public Response<List<D>> save(List<D> dtos, String user) {

        if (CollectionUtils.isEmpty(dtos)) {
            throw new SelfServiceException("Invalid arguments");
        }

        final List<Message> messages = new ArrayList<>();
        Response response = new Response<>();
        dtos.stream().forEach(dto -> {
            Response<D> jobResponse = save(dto, user);
            if (!CollectionUtils.isEmpty(jobResponse.getMessages())) {
                messages.addAll(jobResponse.getMessages());
            }
            if (jobResponse.isErrors()) {
                response.withErrors(true);
            }
        });

        return response.withMessages(messages);

    }

    public Response<D> save(D dto, String user) {
        if (!StringUtils.hasLength(((BaseDto) dto).getId())) {
            isUserEntitled((ID) ((BaseDto) dto).getId(), user);
        }
        E e = repository.saveAndFlush(converter.convertToEntity(dto));
        D d = converter.convertToDto(e);
        return new Response<D>(d);

    }

    public Response<List<D>> findAll(Pageable pageable) {
        return null;
    }

    public Response<D> findById(ID id, String user) {
        isUserEntitled(id, user);
        Optional<E> eOptional = repository.findById(id);
        if (eOptional.isPresent()) {
            D d = converter.convertToDto(eOptional.get());
            return new Response<D>(d);
        }
        return new Response<D>().withMessage(new Message(MessageType.ERROR, "", "Resource with id '" + id + "' not found")).withErrors(true);

    }

    public Response<D> delete(ID id, String user) {
        isUserEntitled(id, user);
        repository.deleteById(id);
        return new Response<D>(null);

    }

    @Override
    public void isUserEntitled(ID id, String user) {

    }
}
