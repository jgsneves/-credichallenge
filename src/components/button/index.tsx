import React from 'react';
import {ButtonWrapper} from './styles';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    theme: "primary" | "secondary";
    children: React.ReactNode
}

export const Button = ({children, theme}: ButtonProps) => {
    return (
        <ButtonWrapper theme={theme}>
            {children}
        </ButtonWrapper>
    );
}
