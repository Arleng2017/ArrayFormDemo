import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxMaskModule } from "ngx-mask";

const modules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
]

@NgModule({
    imports: [
        modules,
        NgxMaskModule.forRoot(),
    ],
    exports: [modules]
})

export class SharedModule { }