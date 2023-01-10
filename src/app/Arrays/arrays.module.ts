import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ArraysComponent } from "./arrays.component";

const routes: Route[] = [
    {
        path: '',
        component: ArraysComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ArraysComponent
    ],
    exports: [
        RouterModule
    ]
})
export class ArraysModule { }