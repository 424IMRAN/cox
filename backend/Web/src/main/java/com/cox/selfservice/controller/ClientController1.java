package com.cox.selfservice.controller;// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.


import com.cox.selfservice.services.users.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping
public class ClientController1 {

    @Autowired
    private UserService userService;

//    @GetMapping("/")
//    public String index(
//        Model model,
//        OAuth2AuthenticationToken authentication,
//        @RegisteredOAuth2AuthorizedClient("azure") OAuth2AuthorizedClient azureClient
////            ,        @RequestBody  Users users
//    ) {
//        String json;
//        model.addAttribute("userName", authentication.getName());
//        String preferredUsername = Optional.of(authentication)
//                                           .map(OAuth2AuthenticationToken::getPrincipal)
//                                           .map(user -> (OidcUser) user)
//                                           .map(StandardClaimAccessor::getPreferredUsername)
//                                           .orElse("UNKNOWN");
//        model.addAttribute("preferredUsername", preferredUsername);
//        Users users = new Users();
//
//        model.addAttribute("clientName", azureClient.getClientRegistration().getClientName());
//        ObjectMapper objectMapper = new ObjectMapper();
//        Users usedDb=userService.findUserbyEmail(preferredUsername);
//
//        try {
//            users.setName(model.getAttribute("userName").toString());
//            users.setEmail(preferredUsername);
//            users.setAuthorizationgranttype(azureClient.getClientRegistration().getAuthorizationGrantType().toString());
//            userService.saveUser(users);
//            json = objectMapper.writeValueAsString(azureClient);
//            Gson gson = new Gson();
//            System.out.println(gson.toJson(json));
//
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//        return toJsonString(azureClient);
////       return new RedirectView("graph");
//    }
//
//    @GetMapping("/graph")
//    @ResponseBody
//    public String graph(@RegisteredOAuth2AuthorizedClient("graph") OAuth2AuthorizedClient graphClient) {
////        user.setName(graphClient.getPrincipalName().split("")[1]);
////        user.setEmail(graphClient.getPrincipalName().split("")[0]);
////        user.setAuthorizationgranttype(graphClient.getClientRegistration().getAuthorizationGrantType().getValue());
////        userService.saveUser(user);
//
////        graphClient.getAccessToken().tokenValue
////                graphClient.getRefreshToken().getTokenValue()
////        String date1=graphClient.getAccessToken().getExpiresAt().toString();
////        SimpleDateFormat formatter=new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
////        Date date2=formatter.parse(date1);
//        // toJsonString() is just a demo.
//        // oAuth2AuthorizedClient contains access_token. We can use this access_token to access resource server.
//        return toJsonString(graphClient);
//    }

}
