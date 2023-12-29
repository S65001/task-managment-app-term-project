import { Member } from "./member";

export interface TeamCreateRequest {

    name:string;
    description:string;
    teamLeader:Member;
    members:Member[];
}
