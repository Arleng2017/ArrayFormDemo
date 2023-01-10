import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { TextHoverDirective } from "../shared/Directive/text-hover.directive";
import { TextTemplateDirective } from "../shared/Directive/text-template.directive";
import { TodoComponent } from "./todo.component";

const routes: Route[] = [
    {
        path: '',
        component: TodoComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        TodoComponent,
        TextHoverDirective
    ],
    exports: [
        RouterModule
    ]
})
export class TodoModule {

}