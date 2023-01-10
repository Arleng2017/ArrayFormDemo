import { Injectable, NgModule } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";
import { CancelDialogComponent } from "./cancel-dialog/cancel-dialog.component";

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(private modalService: NgbModal) {

    }

    openCancelDialog(): Observable<boolean> {
        let confirmResult = new Subject<any>();
        const refModal = this.modalService.open(CancelDialogComponent, { backdrop: 'static', animation: true, keyboard: false });

        refModal.result.then(result => {
            confirmResult.next(result);
        });

        return confirmResult;
    }
}