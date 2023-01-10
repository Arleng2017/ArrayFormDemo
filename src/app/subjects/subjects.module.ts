import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CreateSubjectDialogComponent } from "./create-subject-dialog/create-subject-dialog.component";
import { SubjectsRoutingModule } from "./subject-routing.module";
import { SubjectsComponent } from "./subjects.component";

@NgModule({
    imports: [
        SharedModule,
        SubjectsRoutingModule,
        SharedModule
    ],
    declarations: [
        SubjectsComponent,
        CreateSubjectDialogComponent
    ],
    exports: [],
})

export class SubjectsModule { }