import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openErrorDialog() {
    let confirmResult = new Subject<any>();
    const refModal = this.modalService.open(ErrorDialogComponent, { animation: true, keyboard: false, size: 'xl' });

    refModal.result.then(result => {
      confirmResult.next(result);
    });

    return confirmResult;
  }


  onShowAlert(){
    alert('Hello world')
  }
}
