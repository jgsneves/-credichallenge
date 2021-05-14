import {formatCPF} from '@brazilian-utils/brazilian-utils';

export const colums = [
    {
        title: 'Nome',
        dataIndex: 'name'
    },
    {
        title: 'CPF',
        dataIndex: 'cpf',
        render: (text: string) => formatCPF(text, { pad: true })
    },
    {
        title: 'SALÁRIO DISPONÍVEL (R$)',
        dataIndex: 'salary',
        render: (text: string) => Number(text).toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    },
    {
        title: 'VALOR FINANCIADO (R$)',
        dataIndex: 'value',
        render: (text: string) => Number(text).toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    },
    {
        title: '%',
        dataIndex: 'share',
    },
    {
        title: 'PARCELAS',
        dataIndex: 'installments',
    },
];

export const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    }
};

export const setKeyAttribute = (arr: User[]) => {
    const parsedArray = arr.map(item => {
        const userBody = {...item, key: item.id};
        return userBody;
    });
    return parsedArray;
}

export const sortArray = (arr: UserWithKey[]): UserWithKey[] => {
    const sortedArray = arr.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
    });
    return sortedArray;
}



export const handleSolicitation = ({companyData, selectedUsersKeys, setCompany, solicitationResponse}: HandleSolicitationArgs ) => {
    if (solicitationResponse === "Aprovar") {
        const newUsersArray = companyData.companyUsers.filter(item => !selectedUsersKeys.includes(item.id));
        const approvedUsersArray = companyData.companyUsers.filter(item => selectedUsersKeys.includes(item.id));
        setCompany({
            ...companyData,
            companyUsers: newUsersArray,
            approvedLoans: approvedUsersArray
        });
    } else if (solicitationResponse === "Rejeitar") {
        const newUsersArray = companyData.companyUsers.filter(item => !selectedUsersKeys.includes(item.id));
        const rejectedUsersArray = companyData.companyUsers.filter(item => selectedUsersKeys.includes(item.id));
        setCompany({
            ...companyData,
            companyUsers: newUsersArray,
            reprovedLoans: rejectedUsersArray,
        });
    }
}
