import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions.component';
import { QuestionRoutingModule } from './question-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TextTemplateDirective } from '../shared/Directive/text-template.directive';
import { NavHighlightDirective } from '../shared/Directive/nav-highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    QuestionRoutingModule,
    SharedModule
  ],
  declarations: [
    QuestionsComponent,
  ]
})
export class QuestionsModule { }
