import { FC } from 'react';
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IButton2Props {
  id?: string;
  testId?: string;
  category?: string;
}

const Button2: FC<IButton2Props> = ({id, testId, category}) => {
  const navigate: NavigateFunction = useNavigate();

 const buttonClickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
   navigate(`${category}/${id}`);
 };

    return (
      <button className='button2' data-testid={testId} onClick={buttonClickHandler}>see product</button>
    );
}

export default Button2;