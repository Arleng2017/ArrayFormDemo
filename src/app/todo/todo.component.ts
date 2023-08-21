import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subject } from "rxjs";
import { ConfigurationServices } from "../shared/services/configuration.service";
import { todo } from "./models/todo";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

    todo$: todo[] = [];
    todoSelected: todo[] = [];

    form: FormGroup;
    testNumber:any;

    constructor(private _configuration: ConfigurationServices, private fb: FormBuilder) {
        this._configuration.shareTodo.subscribe(res => {
            const { todos } = res;
            this.todo$ = todos
        });
        this.form = this.fb.group({
            name: this.fb.group({
                firt:['']
            })
        });

        // console.log('result', this.form.get('name')?.value == null);
        console.log(Object.keys(this.form.get('name')?.value).length == 0)
    }

    selectecItem(value: todo) {
        const { id, todo, userId, completed } = value;
        const removeTodo = this.todo$.indexOf(value);
        this.todo$.splice(removeTodo, 1);
        this.todoSelected = [...this.todoSelected, value].sort((a, b) => a.id - b.id);
        console.log(this.todoSelected);

    }

    unSelectecItem(value: todo) {
        const { id, todo, userId, completed } = value;
        const removeTodo = this.todoSelected.indexOf(value);
        this.todoSelected.splice(removeTodo, 1);
        this.todo$ = [...this.todo$, value].sort((a, b) => a.id - b.id);
        console.log(this.todo$);
    }

    onAlert(){
        const value = Number(this.testNumber).toFixed(2);
        console.log(value);
    }
}