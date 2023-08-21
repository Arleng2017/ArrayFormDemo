import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavHighlightDirective } from "../shared/Directive/nav-highlight.directive";
import { TextHoverDirective } from "../shared/Directive/text-hover.directive";
import { TextTemplateDirective } from "../shared/Directive/text-template.directive";
import { CapitalLettterPipe } from "../shared/Pipe/capital-latter.pipe";
import { SharedModule } from "../shared/shared.module";
import { DirectiveComponent } from "./directive.component";


const routes: Routes = [
    {
        path: '',
        component: DirectiveComponent
    }
]

@NgModule({
    declarations: [
        DirectiveComponent,
        // TextTemplateDirective,
        // NavHighlightDirective,
        // TextHoverDirective,
        // CapitalLettterPipe
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class DirectiveModule { }