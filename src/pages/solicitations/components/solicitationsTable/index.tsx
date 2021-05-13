import React from 'react';
import { Button } from '../../../../components/button';
import { SelectInput } from '../../../../components/selectInput';
import { Wrapper } from './styles';

export const SolicitationsTable = () => {
    return (
        <Wrapper>
            <table>
                <tr>
                    <th><input type="checkbox" name="" id="" /></th>
                    <th><h3>NOME</h3></th>
                    <th><h3>CPF</h3></th>
                    <th><h3>SALÁRIO DISPONÍVEL (R$)</h3></th>
                    <th><h3>VALOR FINANCIADO (R$)</h3></th>
                    <th><h3>%</h3></th>
                    <th><h3>PARCELAS</h3></th>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>
                        <p>Pedro Moreira</p>
                    </td>
                    <td>
                        <p>087.366.068-47</p>
                    </td>
                    <td>
                        <p>R$ 23.763,48</p>
                    </td>
                    <td>
                        <p>R$ 163.428,67</p>
                    </td>
                    <td>
                        <p>20</p>
                    </td>
                    <td>
                        <p>20</p>
                    </td>
                </tr>
            </table>
            <SelectInput options={["Aprovar", "Reprovar"]} id="solicitationAction"/>
            <Button theme="secondary">Nenhuma ação selecionada</Button>
        </Wrapper>
    )
}
