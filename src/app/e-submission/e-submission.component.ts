import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-e-submission',
    styleUrls: ['./e-submissoin.components.scss'],
    templateUrl: './e-submissoin.component.html'
})
export class ESubmissioncomponent implements OnInit {

    strokes = '0,100';
    cssprop = 'circular-chart blue';

    constructor(private router: Router, private route: ActivatedRoute) {

    }
    ngOnInit(): void {
    }

    goToInsuranceProduct() {
        this.router.navigate(['e-submission/insurance-product']);
    }

}