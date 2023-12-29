export interface CreateTask {
    title: string,
    status :string,
    assignee :string,
    priority :string,
    startDate :string,
    endDate:string,
    descraption :string,
}

export interface CrUser{
    UserName: string;
    Role:string;
    Email:string;
    Team: string;
}

