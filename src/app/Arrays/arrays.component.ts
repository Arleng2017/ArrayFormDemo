import { Component, OnInit } from "@angular/core";
import { ArrayService } from "./array.service";
import { FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-arrays',
    templateUrl: './arrays.component.html',
    styleUrls: ['./arrays.components.scss']
})
export class ArraysComponent implements OnInit {

    // customerType  = new FormControl('');
    customerType = new FormControl('', [Validators.required, Validators.email]);

    constructor(private arrayService: ArrayService){

    }
    ngOnInit(): void {
    }
    data = [1,2,3]

    sendDate() {
        this.arrayService.data.next('Hello world');
    }

    logResult(){
        console.log(this.customerType);
        
    }
}