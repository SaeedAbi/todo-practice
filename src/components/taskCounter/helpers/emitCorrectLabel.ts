import {TaskCounterStatus} from "../interfaces/ITaskCounter";
import {Status} from "../../CreateTaskForm/enums/Status";

export const emitCorrectLabel=(status:TaskCounterStatus):string=>{
    switch (status){
        case Status.todo:
            return "Todo's";
        case Status.inProgress:
            return 'In Progress'
        case Status.completed:
            return 'Completed'
    }
}