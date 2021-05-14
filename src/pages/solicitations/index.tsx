import React from 'react';
import {Table} from 'antd';
import { NoDataToRender, Wrapper } from './styles';
import 'antd/dist/antd.css';
import { companyContext } from '../../context/company';
import {colums, handleSolicitation, setKeyAttribute, sortArray} from './helper';
import { SelectInput } from '../../components/selectInput';
import { Button } from '../../components/button';

export const Solicitations = () => {
    const {companyData, setCompany} = React.useContext(companyContext);
    const [selectedUsersKeys, setSelectedUsersKeys] = React.useState<string[]>([]);
    const [selectedUsers, setSelectedUsers] = React.useState<UserWithKey[]>();
    const [solicitationResponse, setSolicitationResponse] = React.useState<string>("");

    const rowSelection = {
        onChange: (selectedRowKeys: any, selectedRows: any) => {
          //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
          setSelectedUsersKeys(selectedRowKeys);
          setSelectedUsers(selectedRows);
        }
    };

    function handleSelectInputChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const action = e.target.value;
        setSolicitationResponse(action);
    }

    return (
        <Wrapper>
            <h1>Solicitações de Empréstimo</h1>
            {companyData.companyUsers.length > 0 ? (
                <>
                    <Table
                        columns={colums}
                        dataSource={sortArray(setKeyAttribute(companyData.companyUsers))}
                        rowSelection={{...rowSelection}}
                    />
                    <footer>
                        <SelectInput
                            options={['Aprovar', 'Rejeitar']}
                            id="solicitationResponse"
                            onChange={handleSelectInputChange}
                        />
                        <Button
                            theme={solicitationResponse === '' ? 'secondary' : 'primary'}
                            onClick={() => handleSolicitation({
                                companyData,
                                selectedUsersKeys,
                                setCompany,
                                solicitationResponse
                            })}
                        >
                            {solicitationResponse === '' ? 'Nenhuma ação selecionada' : 'Confirmar'}
                        </Button>

                        <Button theme="primary" onClick={() => console.log("company", companyData)}>Teste</Button>
                    </footer>
                </>
            ) : (
                <NoDataToRender>
                    <h2>Você não tem nenhuma nova solicitação de empréstimo.</h2>
                    <p><a href="https://www.credifit.com.br/">Clique aqui</a> para acompanhar a situação dos empréstimos em andamento de seus colaboradores</p>
                </NoDataToRender>
            )}
        </Wrapper>
    );
}
