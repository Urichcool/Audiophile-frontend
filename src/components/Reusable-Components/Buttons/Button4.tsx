import { FC } from 'react';
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IButton4Props {
  id?: string ;
}

const Button4: FC<IButton4Props> = ({ id }) => {
  const navigate: NavigateFunction = useNavigate();
  
  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigate(`/${id}`);
  };
  
    return ( 
     <button className='button4' onClick={buttonClickHandler}>See Product</button>
    );
}

export default Button4;