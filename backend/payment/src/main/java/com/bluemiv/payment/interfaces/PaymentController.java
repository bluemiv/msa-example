package com.bluemiv.payment.interfaces;

import com.bluemiv.payment.model.Payment;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@Slf4j
@RestController
@RequestMapping("/api/v1")
public class PaymentController {

    @GetMapping("payment/{id}")
    public @ResponseBody Payment payment(@PathVariable long id) {
        log.debug("API: payment/" + id);
        return Payment.builder().id(id).price(10000).type("CREDIT_CARD").build();
    }

    @GetMapping("payments")
    public @ResponseBody ArrayList<Payment> payments() {
        log.debug("API: payments");
        final ArrayList<Payment> payments = new ArrayList<>();
        payments.add(Payment.builder().id(1).price(10000).type("CREDIT_CARD").build());
        payments.add(Payment.builder().id(2).price(13000).type("CASH").build());
        payments.add(Payment.builder().id(3).price(9000).type("CREDIT_CARD").build());
        payments.add(Payment.builder().id(4).price(20000).type("CASH").build());
        payments.add(Payment.builder().id(5).price(78800).type("CREDIT_CARD").build());
        payments.add(Payment.builder().id(6).price(10200).type("CREDIT_CARD").build());
        payments.add(Payment.builder().id(7).price(54000).type("CREDIT_CARD").build());
        payments.add(Payment.builder().id(8).price(39000).type("CASH").build());
        return payments;
    }
}
