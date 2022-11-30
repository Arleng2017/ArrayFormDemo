import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {

  @Input() personalInformation: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  get personalInfo(){
   return this.personalInformation.controls['personalInfo']
  }

  get contacts(){
   return this.personalInformation.controls['contacts']
  }

}
