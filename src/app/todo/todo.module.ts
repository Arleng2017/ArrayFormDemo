import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Route, RouterModule } from "@angular/router";
import { BodyScaleDirective } from "../shared/Directive/body-scale.directive";
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
        RouterModule.forChild(routes),
        FormsModule
    ],
    declarations: [
        TodoComponent,
        TextHoverDirective,
        BodyScaleDirective
    ],
    exports: [
        RouterModule
    ]
})
export class TodoModule {

}