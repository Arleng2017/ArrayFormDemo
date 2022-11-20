import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Questions } from '../shared/data/questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  isSubmitted: boolean = false;
  questions = Questions;

  form: FormGroup = this.fb.group({
    answers: this.fb.array([])
  });;

  userID: FormControl = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createQuestionAnswers();
  }


  get answers() {
    return this.form.controls['answers'] as FormArray;
  }

  createAnswer() {
    const answerForm = this.fb.group({
      id: ['', Validators.required],
      choiceSeleted: ['', Validators.required],
      detail: ['', Validators.required]
    });

    this.answers.push(answerForm);
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.form.value);
    console.log(this.form);
    console.log(this.userID.value,'userID')

    if (this.form.valid) {
      alert('Hello world');
    }
  }

  createQuestionAnswers() {
    for (let question of this.questions) {
      const answerForm = this.fb.group({
        id: [question.question_id, Validators.required],
        choiceSeleted: ['', Validators.required],
        detail: ['', Validators.required]
      });

      this.answers.push(answerForm);
    }
  }

  answerSelect(index: any) {
    let formAnswer = this.answers.controls[index].get('choiceSeleted')?.value;
    if (formAnswer == 1) {
      this.answers.controls[index].get('detail')?.setValidators(Validators.required);
      this.answers.controls[index].get('detail')?.updateValueAndValidity();
    } else {
      this.answers.controls[index].get('detail')?.setValidators(null);
      this.answers.controls[index].get('detail')?.updateValueAndValidity();
    }
  }
}
