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
import { AnyAction, SerializedError } from "@reduxjs/toolkit";
import { scrollUpFunc } from "../../utils/scrollUpFunc";
import { selectCartProducts } from "../../redux/slices/cart/selectors";
import {
  useCheckGoodsCartStockMutation,
  useGetGoodsOutFromStockMutation,
} from "../../redux/services/goods";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const CheckOutForm: FC = () => {
  const dispatch: Dispatch<AnyAction> = useAppDispatch();
  const isCheckOutModalOpen: boolean = useAppSelector(
    selectIsCheckOutModalOpen
  );
  const cartProducts:
    | {
        id: string;
        name: string;
        quantity: number;
        price: number;
        picture: string;
        totalPrice: number;
        category: string;
      }[]
    | [] = useAppSelector(selectCartProducts);
  const [checkCartStock, { isLoading: isCheckCartStockLoading }] =
    useCheckGoodsCartStockMutation();
  const [getGoodsOutFromStock, { isLoading: isGetGoodsOutFromStockLoading }] =
    useGetGoodsOutFromStockMutation();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values: ICheckOutFormValues) => {
        const checkStockResult:
          | {
              data: {
                isEnoughCartStock: boolean;
              };
            }
          | {
              error: FetchBaseQueryError | SerializedError;
            } = await checkCartStock(
          cartProducts.map(({ id, quantity }) => {
            return { id: id, quantity: quantity };
          })
        );
        if (Object.values(checkStockResult)[0].isEnoughCartStock) {
          const updateStockResult = await getGoodsOutFromStock(
            cartProducts.map(({ id, quantity }) => {
              return { id: id, quantity: quantity };
            })
          );
          console.log(updateStockResult);
          if (Object.values(updateStockResult)[0].wasUpdated) {
            console.log(values);
            scrollUpFunc();
            dispatch(switchCheckOutModal(!isCheckOutModalOpen));
          }
        }
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
          <Summary
            errors={props.errors}
            isLoading={{
              isCheckCartStockLoading,
              isGetGoodsOutFromStockLoading,
            }}
          />
          <PersistFormikValues name="checkout-form" />
        </Form>
      )}
    </Formik>
  );
};

export default CheckOutForm;
