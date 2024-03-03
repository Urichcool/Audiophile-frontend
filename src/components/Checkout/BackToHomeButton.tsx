import {FC} from 'react';

interface IBackToHomeButton {
  onClickFunction: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BackToHomeButton:FC<IBackToHomeButton> = ({onClickFunction}) => {
    return (
        <button className='checkout-back-to-home-button' onClick={onClickFunction}>Back to home</button>
    );
}

export default BackToHomeButton;