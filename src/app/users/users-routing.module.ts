import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";

const route: Route[] = [
    {
        path:'',
        component:UsersComponent
    }
]
@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class UsersRoutingModule { }