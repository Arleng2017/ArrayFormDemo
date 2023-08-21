import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { QuestionareComponent } from "./questionare.component";

const route: Route[] = [
    {
        path: '',
        component: QuestionareComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class QuestionareRoutingModule { }