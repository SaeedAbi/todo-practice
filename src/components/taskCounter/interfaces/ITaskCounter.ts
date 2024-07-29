import {Status} from "../../CreateTaskForm/enums/Status";

export type TaskCounterStatus=Status.todo | Status.inProgress | Status.completed

export interface ITaskCounter{
    count?:number;
    status?:TaskCounterStatus;
}