import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cancel-dialog',
  templateUrl: './cancel-dialog.component.html',
  styleUrls: ['./cancel-dialog.component.scss']
})
export class CancelDialogComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeDialog(value: boolean) {
    this.activeModal.close(value);
  }

}