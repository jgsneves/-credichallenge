interface Company {
    id: string;
    cnpj: string;
    fantasyName: string;
    name: string;
    selected: boolean;
}

interface User {
    id: string;
    cpf: string;
    email: string;
    name: string;
    salary: string;
    companyId: string;
    value: string;
}

interface CompanyContext {
    companyName: string;
    companyUsers: User[];
    setCompany: React.Dispatch<React.SetStateAction<CompanyData>>;
}

interface CompanyData {
    companyName: string;
    companyUsers: User[];
}
