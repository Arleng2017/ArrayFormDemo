import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DialogService } from "../shared/Dialogs/dialog.service";
import { CreateSubjectDialogComponent } from "./create-subject-dialog/create-subject-dialog.component";

@Component({
    selector: 'app-subjects',
    templateUrl: './subjects.component.html',
    styleUrls: ['./subjects.component.scss']
})

export class SubjectsComponent {

    isSubmitted: boolean = false;
    form: FormGroup = this.fb.group({
        teacherName: ['', Validators.required],
        lessons: this.fb.array([])
    });

    constructor(private fb: FormBuilder, private modalService: NgbModal, private dialog: DialogService) {
    }

    get lessons() {
        return this.form.controls['lessons'] as FormArray;
    }


    addLesson() {
        const newLesson = this.fb.group({
            title: ['', Validators.required],
            level: ['', Validators.required]
        });

        this.lessons.push(newLesson);
    }

    deleteLesson(lessonIndex: number) {
        this.lessons.removeAt(lessonIndex);
    }

    onSubmit() {
        console.log(this.form.value);
        this.isSubmitted = true;
        if (this.form.valid) {
        }

    }

    createSubject() {
        const modalRef = this.modalService.open(CreateSubjectDialogComponent, { backdrop: 'static', centered: true });
        modalRef.componentInstance.name = {
            firstName: 'arleng',
            lastName: 'chalermchai'
        }

        modalRef.result.then((result) => {
            console.log(result);
        }).catch((error) => {
            console.log(error);
        });
    }

    openCancel() {
        const value = this.dialog.openCancelDialog().subscribe(res => {
            console.log(res, 'confirm result');
        });
    }
}