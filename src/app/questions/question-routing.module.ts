import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { QuestionsComponent } from "./questions.component";

const route: Route[] = [
    {
        path: '',
        component: QuestionsComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class QuestionRoutingModule { }