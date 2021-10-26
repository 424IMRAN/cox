package com.cox.selfservice.converters.base;


import org.mapstruct.InheritInverseConfiguration;

import java.util.List;

/**
 * @author Mohammed Shoukath Ali
 */
public interface BaseConverter<E, D> {

    E convertToEntity(D dto);

    @InheritInverseConfiguration
    D convertToDto(E entity);

    List<E> convertToEntities(List<D> dtos);

    List<D> convertToDtos(List<E> entities);

}
