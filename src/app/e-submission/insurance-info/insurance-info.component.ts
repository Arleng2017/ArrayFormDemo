import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common'

@Component({
    selector: 'app-insurance-info',
    styleUrls: ['./insurance-info.component.scss'],
    templateUrl: './insurance-info.component.html'
})
export class InsuranceInfoComponent implements OnInit {
    /**
     *
     */
    constructor(private location: Location) {

    }

    ngOnInit(): void {
    }

    GoBack() {
        this.location.back();
    }
}