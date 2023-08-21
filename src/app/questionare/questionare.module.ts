import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TextTemplateDirective } from '../shared/Directive/text-template.directive';
import { NavHighlightDirective } from '../shared/Directive/nav-highlight.directive';
import { QuestionareComponent } from './questionare.component';
import { QuestionRoutingModule } from '../questions/question-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule
  ],
  declarations: [
    QuestionareComponent,
  ]
})
export class QuestionareModule { }
