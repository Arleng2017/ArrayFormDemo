import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwIfEmpty } from 'rxjs';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./user.component.scss']
})

export class UsersComponent {
    isSubmitted:boolean = false;
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            prename: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            tel: ['', Validators.required],
            email: [''],
            address: this.fb.group({
                houseNo: ['', Validators.required],
                buildingName: [''],
                villageName: [''],
                villageNo: [''],
                subDisctrict: ['', Validators.required],
                district: ['', Validators.required],
                province: ['', Validators.required],
                zipcode: ['', Validators.required]
            })
        });
    }

    onSubmit() {
        this.isSubmitted = true;
        console.log(this.form.value);
        console.log(this.form);
    }

}