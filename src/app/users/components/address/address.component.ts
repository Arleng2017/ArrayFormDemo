import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { throwIfEmpty } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() form: any
  @Input() index: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
