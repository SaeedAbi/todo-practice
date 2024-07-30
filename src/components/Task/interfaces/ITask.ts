import {ITaskFooter} from "./ITaskFooter";
import {ITaskHeader} from "./ITaskHeader";
import {ITaskDescription} from "./ITaskDescription";

export interface ITask extends ITaskFooter,ITaskHeader,ITaskDescription{
    id?:string;
    priority?:string;
    status?:string
}