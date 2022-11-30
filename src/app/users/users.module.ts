import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxMaskModule } from "ngx-mask";
import { SharedModule } from "../shared/shared.module";
import { AddressComponent } from "./components/address/address.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PersonalInfoComponent } from "./components/personal-info/personal-info.component";
import { PersonalInformationComponent } from "./components/personal-information/personal-information.component";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from './users.component'

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule,
        NgxMaskModule.forRoot(),
    ],
    declarations: [
        UsersComponent,
        AddressComponent,
        PersonalInfoComponent,
        PersonalInformationComponent,
        PersonalInformationComponent,
        ContactComponent
    ],
    exports: []
})

export class UsersModule { }