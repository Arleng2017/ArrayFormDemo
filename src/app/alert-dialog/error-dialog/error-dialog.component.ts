import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css'],
  providers: [NgbAlertModule]
})
export class ErrorDialogComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
    setTimeout(() => {
      this.activeModal.close();
    }, 2500);
  }

  onCloseErrorDialog() {
    this.activeModal.close();

  }
}
