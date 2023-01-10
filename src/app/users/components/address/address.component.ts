import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil, throwIfEmpty } from 'rxjs';
import { ConfigurationServices } from 'src/app/shared/services/configuration.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() form: any
  @Input() index: number = 0;

  _unsubscribeAll: Subject<any> = new Subject<any>();
  province$: any[] = [];
  constructor(private fb: FormBuilder, private _configuration: ConfigurationServices) { }

  ngOnInit() {
    this.loadProvince();
  }

  loadProvince() {
    this._configuration.ShareProvince
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(result => {
        this.province$ = result;
      })
  }

}
