import { Component, Input, OnInit } from '@angular/core';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data : any;
  
  constructor(private arrayService: ArrayService){

  }

  ngOnInit() {
    this.arrayService.data
    .subscribe(res=>{
      alert(res);
    })
  }

}
