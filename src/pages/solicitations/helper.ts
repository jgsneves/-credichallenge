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
