import { FC } from 'react';
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IButton2Props {
  id?: string;
}

const Button2: FC<IButton2Props> = ({id}) => {
  const navigate: NavigateFunction = useNavigate();

 const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
   navigate(`/${id}`);
 };

    return (
      <button className='button2' onClick={buttonClickHandler}>see product</button>
    );
}

export default Button2;