import { Formik, Form } from "formik";
import { FC } from "react";
import BillingDetailsFields from "./BillingDetailsFields";
import ShippingInfoFields from "./ShippingInfoFields";
import PaymentDetailsFields from "./PaymentDetailsFields";
import EMoneyFields from "./EMoneyFields";
import CashInfo from "./CashInfo";
import { PersistFormikValues } from "formik-persist-values";
import Summary from "./Summary";
import * as yup from "yup";

export interface ICheckOutFormValues {
  name: string;
  email: string;
  phone: string;
  adress: string;
  zip: string;
  city: string;
  country: string;
  radioValue: string;
  eMoneyNumber: string;
  eMoneyPin: string;
}

const CheckOutForm: FC = () => {
  const initialValues: ICheckOutFormValues = {
    name: "",
    email: "",
    phone: "",
    adress: "",
    zip: "",
    city: "",
    country: "",
    radioValue: "eMoney",
    eMoneyNumber: "",
    eMoneyPin: "",
  };

  const CheckOutValidationSchema: yup.ObjectSchema<
    {
      name: string | undefined;
      email: string | undefined;
      phone: string | undefined;
      adress: string | undefined;
      zip: string | undefined;
      city: string | undefined;
      country: string | undefined;
      radioValue: string | undefined;
      eMoneyNumber: string | undefined;
      eMoneyPin: string | undefined;
    },
    yup.AnyObject,
    {
      name: string | undefined;
      email: string | undefined;
      phone: string | undefined;
      adress: string | undefined;
      zip: string | undefined;
      city: string | undefined;
      country: string | undefined;
      radioValue: string | undefined;
      eMoneyNumber: string | undefined;
      eMoneyPin: string | undefined;
    },
    ""
  > = yup.object().shape({
    name: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Incorrect email format")
      .required("This field is required"),
    phone: yup
      .string()
      .required("This field is required")
      .test({
        name: "phone-has-correct-format",
        skipAbsent: true,
        test(value, ctx) {
          if (!Number(value)) {
            return ctx.createError({
              message: "Phone number must contain only digits",
            });
          }
          if (!value.match(/^\+\d+/)) {
            return ctx.createError({
              message: "Country code is required",
            });
          }
          return true;
        },
      })
      .min(5, "Phone number is too short")
      .max(15, "Phone number is too long"),
    adress: yup.string().required("This field is required"),
    zip: yup.string().required("This field is required"),
    city: yup.string().required("This field is required"),
    country: yup
      .string()
      .required("This field is required")
      .matches(/^[A-Za-z\s-']+$/),
    radioValue: yup.string(),
    eMoneyNumber: yup
      .string()
      .test({
        name: "E-money number must contai only digits",
        skipAbsent: true,
        test(value, ctx) {
          if (!Number(value)) {
            return ctx.createError({
              message: "E-money number must contain only digits",
            });
          }
          if (value?.length !== 9) {
            return ctx.createError({
              message: "E-money number must contain 9 digits",
            });
          }
          return true;
        },
      })
      .when("radioValue", {
        is: "eMoney",
        then: (schema) => schema.required("This field is required"),
        otherwise: (schema) => schema.optional(),
      }),
    eMoneyPin: yup.string().when("radioValue", {
      is: "eMoney",
      then: (schema) => schema.required("This field is required"),
      otherwise: (schema) => schema.optional(),
    }),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: ICheckOutFormValues) => {
        console.log(values);
      }}
      validationSchema={CheckOutValidationSchema}
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
          <Summary />
          {/* <PersistFormikValues name="checkout-form" /> */}
        </Form>
      )}
    </Formik>
  );
};

export default CheckOutForm;
