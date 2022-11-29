import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AddressComponent } from "./components/address/address.component";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from './users.component'

@NgModule({
    imports: [
        CommonModule,
        UsersRoutingModule,
        SharedModule
    ],
    declarations: [
        UsersComponent,
        AddressComponent
    ],
    exports: []
})

export class UsersModule { }