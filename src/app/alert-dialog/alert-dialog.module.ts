import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertDialogComponent } from './alert-dialog.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbAlertModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: AlertDialogComponent
  }
]

@NgModule({
  imports: [
    NgbTooltipModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgbAlertModule
  ],
  declarations: [AlertDialogComponent]
})
export class AlertDialogModule { }
