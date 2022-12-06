import { RESTDataSource } from '@apollo/datasource-rest';
import { Payment } from '../model';

class PaymentApiDataSource extends RESTDataSource {
  override baseURL = 'http://localhost:3002/api/v1/';

  getPayment = async (id: number): Promise<Payment> => {
    return this.get<Payment>(`payment/${id}`);
  };

  getPayments = async (): Promise<[Payment]> => {
    return this.get<[Payment]>(`payments`);
  };
}

export default PaymentApiDataSource;
