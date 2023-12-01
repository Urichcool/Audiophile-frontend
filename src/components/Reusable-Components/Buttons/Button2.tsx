import { FC } from 'react';
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IButton2Props {
  id: string | undefined;
}

const Button2: FC<IButton2Props> = ({id}) => {
  const navigate: NavigateFunction = useNavigate();
    return (
      <button className='button2' onClick={() => {navigate(`/${id}`)}}>see product</button>
    );
}

export default Button2;