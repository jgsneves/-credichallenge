import React from 'react';
import { Select } from './styles';

interface InputProps extends React.HTMLProps<HTMLSelectElement> {
    options: string[];
}

export const SelectInput = ({options, id, onChange, value}: InputProps) => {
    return (
        <Select id={id} onChange={onChange} value={value}>
            <option value="">Escolha uma ação...</option>
            {options.map(item => (
                <option value={item} key={item}>{item}</option>
            ))}
        </Select>
    );
}
