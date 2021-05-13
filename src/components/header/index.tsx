import React, { useContext } from 'react';
import { companyContext } from '../../context/company';
import { BrandIcon } from '../brandIcon';
import { AvatarImage, Wrapper } from './styles';

export const Header = () => {
    const context = useContext(companyContext);

    return (
        <Wrapper>
            <main>
                <BrandIcon />
                <nav>
                    <h2>Contratos</h2>
                    <h2>Solicitações</h2>
                    <h2>Importar Folha</h2>
                    <h2>Relatório</h2>
                </nav>
                <aside>
                    <AvatarImage>
                        <h2>TA</h2>
                    </AvatarImage>
                    <h2>{context.companyName}</h2>
                </aside>
            </main>
        </Wrapper>
    );
}
