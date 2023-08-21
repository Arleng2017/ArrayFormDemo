import { NgModule } from "@angular/core";
import { ESubmissioncomponent } from "./e-submission.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { InsuranceProductComponent } from "./insurance-product/insurance-product.component";
import { InsuranceInfoComponent } from "./insurance-info/insurance-info.component";

const routes: Routes = [
    {
        path: '',
        component: ESubmissioncomponent
    },
    {
        path: 'insurance-product',
        component: InsuranceProductComponent
    },
    {
        path: 'insurance-info',
        component: InsuranceInfoComponent
    }
]

@NgModule({
    declarations: [
        ESubmissioncomponent,
        InsuranceProductComponent,
        InsuranceInfoComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class ESubmissionModule {

}