import React, { useContext } from 'react';
import {Table} from 'antd';
import { Wrapper } from './styles';
import 'antd/dist/antd.css';
import { companyContext } from '../../context/company';
import {colums, rowSelection} from './helper';


export const Solicitations = () => {
    const {companyUsers} = useContext(companyContext);

    return (
        <Wrapper>
            <h1>Solicitações de Empréstimo</h1>
            <Table
                columns={colums}
                dataSource={companyUsers}
                rowSelection={{...rowSelection}}
            />
        </Wrapper>
    );
}
