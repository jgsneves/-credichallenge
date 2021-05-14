import React from 'react';
import { Select } from './styles';

interface InputProps extends React.HTMLProps<HTMLSelectElement> {
    options: string[];
}

export const SelectInput = ({options, id, onChange}: InputProps) => {
    return (
        <Select id={id} onChange={onChange} defaultValue="">
            <option value="">Escolha uma ação...</option>
            {options.map(item => (
                <option value={item} key={item}>{item}</option>
            ))}
        </Select>
    );
}
