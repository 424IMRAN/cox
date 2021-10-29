package com.cox.selfservice.dto.users;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class Users {
    private String id;
    private String name;
    private String lastName;
    private String email;
    private String vendor;
    private Date created;
    private Date updated;
    private Date modified;
    private Date expires;
}
