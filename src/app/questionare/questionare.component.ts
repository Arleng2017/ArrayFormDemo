import { ForwardRefHandling } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Questionare } from '../shared/data/questionare';

@Component({
  selector: 'app-questionare',
  templateUrl: './questionare.component.html',
  styleUrls: ['./questionare.component.css'],
})
export class QuestionareComponent implements OnInit {

  isSubmitted: boolean = false;
  questions = Questionare;

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
      questionId: [],
      questoinType: [],
      questionValue: [],

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
    console.log(this.userID.value, 'userID')

    if (this.form.valid) {
      alert('Hello world');
    }
  }

  createQuestionAnswers() {
    for (let question of this.questions) {
      const answerForm = this.fb.group({
        questionId: [question.question_id, Validators.required],
        questionType: [question.question_type, Validators.required],
        questionValue: ['', question.question_type == 3 ? Validators.required : null],
      });

      this.answers.push(answerForm);
    }
  }

  answerSelect(index: any) {
    let formAnswer = this.answers.controls[index].get('questionValue')?.value;
    const question = this.questions.filter(x => x.question_type === 3)
      .find(x => x.choice.some(x => x.choice_id == formAnswer));
    let choiceIndex = question?.choice.findIndex(x => x.choice_id == formAnswer)
    let choiceLength = question?.choice.length;
    const isLastChoise = Number(choiceIndex) == (Number(choiceLength) - 1);

    index += 1;
    for (let i = index; i < this.answers.length; i++) {
      let questionType = this.answers.controls[i].get('questionType')?.value;

      if (questionType !== 7) return;

      if (isLastChoise) {
        this.answers.controls[i].get('questionValue')?.setValue('');
        this.answers.controls[i].get('questionValue')?.setValidators([Validators.required]);
        this.answers.controls[i].get('questionValue')?.updateValueAndValidity();
      }else{
        this.answers.controls[i].get('questionValue')?.setValue('');
        this.answers.controls[i].get('questionValue')?.clearValidators();
        this.answers.controls[i].get('questionValue')?.updateValueAndValidity();
      }
    }
    this.answers.controls[index]

    // if (formAnswer == 1) {
    //   this.answers.controls[index].get('detail')?.setValidators(Validators.required);
    //   this.answers.controls[index].get('detail')?.updateValueAndValidity();
    // } else {
    //   this.answers.controls[index].get('detail')?.setValidators(null);
    //   this.answers.controls[index].get('detail')?.updateValueAndValidity();
    // }
  }
}
