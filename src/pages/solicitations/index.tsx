import React from 'react';
import { Table } from 'antd';
import { FinalStage, NoDataToRender, Wrapper } from './styles';
import { companyContext } from '../../context/company';
import { colums, handleSolicitation, setKeyAttribute, sortArray } from './helper';
import { SelectInput } from '../../components/selectInput';
import { Button } from '../../components/button';
import { formatCPF } from '@brazilian-utils/brazilian-utils';
import 'antd/dist/antd.css';

export const Solicitations = () => {
    const [finalStage, setFinalStage] = React.useState<boolean>(true);
    const {companyData, setCompany} = React.useContext(companyContext);
    const [selectedUsersKeys, setSelectedUsersKeys] = React.useState<string[]>([]);
    const [selectedUsers, setSelectedUsers] = React.useState<UserWithKey[]>();
    const [solicitationResponse, setSolicitationResponse] = React.useState<string>("");

    const rowSelection = {
        onChange: (selectedRowKeys: any, selectedRows: any) => {
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
                            value={solicitationResponse}
                        />
                        <Button
                            theme={solicitationResponse === '' ? 'secondary' : 'primary'}
                            onClick={() => solicitationResponse === '' ? null : setFinalStage(!finalStage)}
                        >
                            {solicitationResponse === '' ? 'Nenhuma ação selecionada' : 'Confirmar'}
                        </Button>
                    </footer>
                </>
            ) : (
                <NoDataToRender>
                    <h2>Você não tem nenhuma nova solicitação de empréstimo.</h2>
                    <p><a href="https://www.credifit.com.br/">Clique aqui</a> para acompanhar a situação dos empréstimos em andamento de seus colaboradores</p>
                </NoDataToRender>
            )}
            {finalStage ?
                <FinalStage>
                    <main>
                        <h3>{solicitationResponse} as {selectedUsers?.length} solicitações</h3>
                        <p>Você tem certeza de que deseja {solicitationResponse.toLowerCase()} as seguintes solicitações?</p>
                        <ol>
                            {selectedUsers?.map(loans => (
                                <li key={loans.id}>
                                    <p>{loans.name}</p>
                                    <p>{formatCPF(loans.cpf)}</p>
                                    <p>{Number(loans.value).toLocaleString("pt-br", { style: "currency", currency: "BRL" })}</p>
                                </li>
                            ))}
                        </ol>
                        <Button
                            theme="secondary"
                            onClick={() => setFinalStage(!finalStage)}
                        >Cancelar</Button>
                        <Button
                            theme="primary"
                            onClick={() => handleSolicitation({
                                companyData,
                                selectedUsersKeys,
                                setCompany,
                                solicitationResponse,
                                setFinalStage,
                                setSolicitationResponse
                            })}
                        >Confirmar</Button>
                    </main>
                </FinalStage>
            : null}
        </Wrapper>
    );
}
