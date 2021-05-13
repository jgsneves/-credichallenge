import React from 'react';
import { Select } from './styles';

interface InputProps extends React.HTMLProps<HTMLSelectElement> {
    options: string[];
}

export const SelectInput = ({options, id}: InputProps) => {
    return (
        <Select id={id}>
            <option value="">Escolha uma ação...</option>
            {options.map(item => (
                <option value={item}>{item}</option>
            ))}
        </Select>
    );
}
