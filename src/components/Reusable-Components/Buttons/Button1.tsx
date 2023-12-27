import { FC } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

interface IButton1Props{
    id: string | undefined;
    testId:string
}

const Button1: FC<IButton1Props> = ({ id, testId }) => {
    const navigate: NavigateFunction = useNavigate();
    return (
     <button className='button1' data-testid={testId} onClick={():void => {navigate(`/${id}`)}}>See product</button>
    );
}

export default Button1;