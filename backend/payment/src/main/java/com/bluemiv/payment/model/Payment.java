package com.bluemiv.payment.model;

import lombok.*;

@Builder
@ToString
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Payment {

    private long id;

    private long price;

    private String type;
}
