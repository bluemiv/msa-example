package com.bluemiv.user.interfaces;

import com.bluemiv.user.domain.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    @GetMapping("user")
    public @ResponseBody User user() {
        return User.builder().id(1).username("taehongkim").email("public.bluemiv@gmail.com").build();
    }
}
