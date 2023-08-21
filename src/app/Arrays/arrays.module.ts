import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ArraysComponent } from "./arrays.component";
import { ChildComponent } from "./child/child.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Route[] = [
    {
        path: '',
        component: ArraysComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ArraysComponent,
        ChildComponent
    ],
    exports: [
        RouterModule,
        
    ]
})
export class ArraysModule { }