import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector :'app-insurance-product',
    styleUrls:['./insurance-product.components.scss'],
    templateUrl:'./insurance-product.component.html'
})
export class InsuranceProductComponent implements OnInit {
    /**
     *
     */
    constructor(private router:Router) {
    }
    ngOnInit(): void {
    }

    goToInsuranceInfo(){
        this.router.navigate(['e-submission/insurance-info']);
    }

}