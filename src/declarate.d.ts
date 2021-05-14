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

interface UserWithKey extends User {
    key: string;
}

interface CompanyData {
    companyName: string;
    companyUsers: User[];
    approvedLoans: User[];
    reprovedLoans: USer[];
}

interface CompanyContext {
    companyData: CompanyData;
    setCompany: React.Dispatch<React.SetStateAction<CompanyData>>;
}

interface HandleSolicitationArgs {
    solicitationResponse: string;
    companyData: CompanyData;
    selectedUsersKeys: string[];
    setCompany: React.Dispatch<React.SetStateAction<CompanyData>>;
    setFinalStage: React.Dispatch<React.SetStateAction<boolean>>;
    setSolicitationResponse: React.Dispatch<React.SetStateAction<string>>;
}
