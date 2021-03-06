package com.cox.selfservice.controller;// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.


import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AuthorityController {
    @GetMapping("User")
    @ResponseBody
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public String Admin() {
        return "Admin message";
    }
}
