import { Member } from "./member";

export interface TaskCreateRequest {
    title: string;
    description: string;
    status: string;
    priority: string;
    startDate: string;
    endDate: string;
    creator: Member;
    assignee: Member;

}
