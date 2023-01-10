import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: 'app-create-subject-dialog',
    templateUrl: './create-subject-dialog.component.html',
    styleUrls: ['./create-subject-dialog.component.scss']
})

export class CreateSubjectDialogComponent {

    @Input() name: any;
    form: FormGroup;
    userMockup: any;
    constructor(private activeModal: NgbActiveModal, private formBuilder: FormBuilder) {


        this.form = this.formBuilder.group({
            username: ['sdf', Validators.required],
            password: [this.userMockup?.lastName, Validators.required]
        });
    }

    submitForm() {
        if (this.form.valid) {
            this.activeModal.close(this.form.value);

        }
    }

    ngOnInit() {
        this.userMockup = name;

        this.form.controls['username'].setValue(this.userMockup.firstName);
        this.form.controls['password'].setValue(this.userMockup.lastName);

    }

    closeModal() {
        this.activeModal.close('Modal Closed');
    }

}