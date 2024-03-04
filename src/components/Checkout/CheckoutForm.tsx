import { Formik, Form } from "formik";
import { Dispatch, FC } from "react";
import BillingDetailsFields from "./BillingDetailsFields";
import ShippingInfoFields from "./ShippingInfoFields";
import PaymentDetailsFields from "./PaymentDetailsFields";
import EMoneyFields from "./EMoneyFields";
import CashInfo from "./CashInfo";
import { PersistFormikValues } from "formik-persist-values";
import Summary from "./Summary";
import {
  CheckOutValidationSchema,
  ICheckOutFormValues,
  initialValues,
} from "./CheckoutFormData";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/reduxHooks/reduxHooks";
import {
  selectIsCheckOutModalOpen,
  switchCheckOutModal,
} from "../../redux/slices/checkout-modal/checkOutModalSlice";
import { AnyAction } from "@reduxjs/toolkit";
import { scrollUpFunc } from "../../utils/scrollUpFunc";

const CheckOutForm: FC = () => {
  const dispatch: Dispatch<AnyAction> = useAppDispatch();
  const isCheckOutModalOpen: boolean = useAppSelector(
    selectIsCheckOutModalOpen
  );
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: ICheckOutFormValues) => {
        console.log(values);
        scrollUpFunc();
        dispatch(switchCheckOutModal(!isCheckOutModalOpen));
      }}
      validationSchema={CheckOutValidationSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {(props) => (
        <Form className="checkout-form">
          <div className="checkout-container">
            <h5 className="checkout-container-title">Checkout</h5>
            <BillingDetailsFields values={props.values} errors={props.errors} />
            <ShippingInfoFields values={props.values} errors={props.errors} />
            <PaymentDetailsFields
              values={props.values}
              onChangeRadioValue={props.setFieldValue}
            />
            {props.values.radioValue === "eMoney" ? (
              <EMoneyFields values={props.values} errors={props.errors} />
            ) : (
              <CashInfo />
            )}
          </div>
          <Summary errors={props.errors} />
          <PersistFormikValues name="checkout-form" />
        </Form>
      )}
    </Formik>
  );
};

export default CheckOutForm;
