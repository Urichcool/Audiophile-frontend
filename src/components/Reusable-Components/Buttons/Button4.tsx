import { FC } from 'react';
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IButton4Props {
  id?: string ;
}

const Button4: FC<IButton4Props> = ({ id }) => {
    const navigate: NavigateFunction = useNavigate();
    return ( 
     <button className='button4' onClick={():void => {navigate(`/${id}`)}}>See Product</button>
    );
}

export default Button4;