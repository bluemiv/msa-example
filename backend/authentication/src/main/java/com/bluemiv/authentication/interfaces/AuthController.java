package com.bluemiv.authentication.interfaces;

import com.bluemiv.authentication.domain.AuthToken;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/v1/")
public class AuthController {

    @GetMapping("authenticate")
    public @ResponseBody AuthToken authorize(@RequestParam("username") String username) {
        log.debug("/api/v1/authenticate / username: " + username);
        return AuthToken.builder().token("F435SF5OI7JD5SIF6OH45DOI34H5D36SF46IOHDSFIOH").username(username).build();
    }

}
