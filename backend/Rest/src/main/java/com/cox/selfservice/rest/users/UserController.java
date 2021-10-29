package com.cox.selfservice.rest.users;

import com.cox.selfservice.dao.entity.users.Users;
import com.cox.selfservice.services.users.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.oidc.StandardClaimAccessor;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Date;
import java.util.Optional;

@RestController

public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping("/api")
    @PostMapping("/user/save")
    public Users saveUser(@RequestBody Users user){
        return userService.saveUser(user);
    }

    @GetMapping("/")
    public String index(
            Model model,
            OAuth2AuthenticationToken authentication,
            @RegisteredOAuth2AuthorizedClient("azure") OAuth2AuthorizedClient azureClient
//            ,        @RequestBody  Users users
    ) {
        String json;
        model.addAttribute("userName", authentication.getName());
        String preferredUsername = Optional.of(authentication)
                .map(OAuth2AuthenticationToken::getPrincipal)
                .map(user -> (OidcUser) user)
                .map(StandardClaimAccessor::getPreferredUsername)
                .orElse("UNKNOWN");
        model.addAttribute("preferredUsername", preferredUsername);
        Users users = new Users();


        model.addAttribute("clientName", azureClient.getClientRegistration().getClientName());
        ObjectMapper objectMapper = new ObjectMapper();
        Users usedDb=userService.findUserbyEmail(preferredUsername);
            users.setName(model.getAttribute("userName").toString());
            users.setEmail(preferredUsername);
            users.setVendor(azureClient.getClientRegistration().getClientName());
            users.setAuthorizationgranttype(azureClient.getClientRegistration().getAuthorizationGrantType().toString());
            users.setCreated(Date.from(azureClient.getAccessToken().getIssuedAt()));
            users.setExpires(Date.from(azureClient.getAccessToken().getExpiresAt()));
            userService.saveUser(users);

        return preferredUsername+" Logged in Successfully as "+authentication.getAuthorities().toArray()[0].toString();
//        return "index";
//       return new RedirectView("graph");
    }

    @GetMapping("/graph")
    @ResponseBody
    public String graph(@RegisteredOAuth2AuthorizedClient("graph") OAuth2AuthorizedClient graphClient) {
//        user.setName(graphClient.getPrincipalName().split("")[1]);
//        user.setEmail(graphClient.getPrincipalName().split("")[0]);
//        user.setAuthorizationgranttype(graphClient.getClientRegistration().getAuthorizationGrantType().getValue());
//        userService.saveUser(user);

//        graphClient.getAccessToken().tokenValue
//                graphClient.getRefreshToken().getTokenValue()
//        String date1=graphClient.getAccessToken().getExpiresAt().toString();
//        SimpleDateFormat formatter=new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss");
//        Date date2=formatter.parse(date1);
        // toJsonString() is just a demo.
        // oAuth2AuthorizedClient contains access_token. We can use this access_token to access resource server.
        return "toJsonString(graphClient)";
    }



}
