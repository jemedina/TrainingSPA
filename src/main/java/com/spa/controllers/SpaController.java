package com.spa.controllers;

import com.spa.model.User;
import com.spa.model.Wellcome;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SpaController {

    @GetMapping("/")
    public String spa() {
        return "single";
    }

    @GetMapping("/profile")
    @ResponseBody
    public User profile() {
        //Get data from databases or services
        User user = new User();
        user.setAge(20);
        user.setUsername("Pancho");
        return user;
    }

    @GetMapping("/home")
    @ResponseBody
    public Wellcome wellcome() {
        //Get data from databases or services
        Wellcome wellcome = new Wellcome();
        wellcome.setGreeting("Hi and wellcome to this app!");
        wellcome.setAppname("SPA App");
        return wellcome;
    }


}
