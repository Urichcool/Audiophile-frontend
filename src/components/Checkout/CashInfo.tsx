import {FC} from 'react';
import CashPaymentIcon from '../../images/icons/CashPaymentIcon';

const CashInfo:FC = () => {
    return (
      <div className="cash-info-container">
        <CashPaymentIcon />
        <p className="cash-info-text">
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      </div>
    );
}

export default CashInfo;