package com.bluemiv.user.interfaces;

import com.bluemiv.user.domain.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@Slf4j
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    @GetMapping("user/{id}")
    public @ResponseBody User user(@PathVariable long id) {
        log.info("API: user/"+ id);
        return User.builder().id(id).username("taehongkim").email("public.bluemiv@gmail.com").build();
    }

    @GetMapping("users")
    public @ResponseBody ArrayList<User> users() {
        log.info("API: users");
        final ArrayList<User> users = new ArrayList<>();
        users.add(User.builder().id(1).username("taehongkim").email("taehong0115@gmail.com").build());
        users.add(User.builder().id(2).username("bluemiv").email("public.bluemiv@gmail.com").build());
        return users;
    }
}
