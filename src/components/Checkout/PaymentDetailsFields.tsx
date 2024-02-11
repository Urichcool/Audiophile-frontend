import {FC} from 'react';
import CheckoutRadioButton from '../Reusable-Components/CheckoutRadioButton';
import { ICheckOutFormValues } from './CheckoutForm';
import { FormikErrors } from 'formik';

interface IPaymentDetailsFields {
  values: ICheckOutFormValues;
  onChangeRadioValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<ICheckOutFormValues>>;
  
}

const PaymentDetailsFields:FC<IPaymentDetailsFields> = ({values, onChangeRadioValue}) => {
    return (
      <>
        <h6 className="Sub-title-manrope-bold checkout-page-fields-title">
          Payment details
        </h6>
        <div className="payment-method-container">
          <label className="payment-details-fields-label">Payment Method</label>
          <div className="payment-method-fields">
            <CheckoutRadioButton
              radioId="checkoutEMoney"
              radioValue={values.radioValue}
              value="eMoney"
              radioName="e-Money"
              onChangeRadioValue={onChangeRadioValue}
            />
            <CheckoutRadioButton
              radioId="checkoutCash"
              radioValue={values.radioValue}
              value="cash"
              radioName="Cash on delivery"
              onChangeRadioValue={onChangeRadioValue}
            />
          </div>
        </div>
      </>
    );
}

export default PaymentDetailsFields;