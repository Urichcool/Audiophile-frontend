import { FC } from 'react';
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IButton4Props {
  id?: string ;
  testId?: string;
  category?: string;
}

const Button4: FC<IButton4Props> = ({ id, testId, category }) => {
  const navigate: NavigateFunction = useNavigate();
  
  const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigate(`/${category}/${id}`);
  };
  
    return ( 
     <button className='button4' onClick={buttonClickHandler} data-testid={testId}>See Product</button>
    );
}

export default Button4;