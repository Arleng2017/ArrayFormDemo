import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { SubjectsRoutingModule } from "./subject-routing.module";
import { SubjectsComponent } from "./subjects.component";

@NgModule({
    imports: [
        SharedModule,
        SubjectsRoutingModule
    ],
    declarations: [
        SubjectsComponent
    ],
    exports: [],
})

export class SubjectsModule { }