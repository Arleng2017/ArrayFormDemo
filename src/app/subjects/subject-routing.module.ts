import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { SubjectsComponent } from "./subjects.component";

const route: Route[] = [
    {
        path: '',
        component: SubjectsComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]

})

export class SubjectsRoutingModule { }