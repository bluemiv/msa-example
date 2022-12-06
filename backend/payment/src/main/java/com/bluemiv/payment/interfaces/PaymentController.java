package com.bluemiv.payment.interfaces;

import com.bluemiv.payment.model.Payment;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class PaymentController {

    @GetMapping("payment")
    public @ResponseBody Payment payment() {
        return Payment.builder().id(1).price(10000).type("CREDIT_CARD").build();
    }
}
