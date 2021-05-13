import React from 'react';
import { SolicitationsTable } from './components/solicitationsTable';
import { Wrapper } from './styles';

export const Solicitations = () => {
    return (
        <Wrapper>
            <h1>Solicitações de Empréstimo</h1>
            <SolicitationsTable />
        </Wrapper>
    );
}
