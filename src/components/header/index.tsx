import React from 'react';
import { BrandIcon } from '../brandIcon';
import { AvatarImage, Wrapper } from './styles';

export const Header = () => {
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
                    <h2>iSorensen Tecnologia</h2>
                </aside>
            </main>
        </Wrapper>
    );
}
