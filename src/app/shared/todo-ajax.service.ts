import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import 'rxjs/add/operator/toPromise';
import { Todo } from "./todo";

@Injectable()
export class TodoAjaxService {
    private urlAPI:string = 'http://localhost:3000/todo';
    constructor(private http:HttpClient){}

    getAllTodo():Promise<Todo[]> {
        return this.http.get<Todo[]>(this.urlAPI).toPromise();
    }

}
