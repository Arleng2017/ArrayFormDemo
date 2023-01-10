import { Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ConfigurationServices } from 'src/app/shared/services/configuration.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  @Input() personalInfo: any;
  prefix$: any[] = [];
  province$: any[] = [];
  _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _configuration: ConfigurationServices) { }

  ngOnInit() {
    this.loadNamePrefix();
    this.loadProvince();
  }

  loadNamePrefix() {
    this._configuration.shareNamePrefix
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(prefix => {
        this.prefix$ = prefix;
      });
  }

  loadProvince() {
    this._configuration.ShareProvince
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(result => {
        this.province$ = result;
      })
  }

}
