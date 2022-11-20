import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

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

    constructor(private fb: FormBuilder) {

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
}