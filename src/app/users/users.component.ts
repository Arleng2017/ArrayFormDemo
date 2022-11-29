import { Component } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { throwIfEmpty } from 'rxjs';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./user.component.scss']
})

export class UsersComponent {
    isSubmitted: boolean = false;
    form: FormGroup;
    form2: FormGroup = this.fb.group({});;

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

        this.form2 = this.fb.group({
            prename: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            tel: ['', Validators.required],
            email: [''],
            address: this.fb.array([
                this.fb.group({
                    houseNo: ['a', Validators.required],
                    buildingName: ['b'],
                    villageName: ['c'],
                    villageNo: ['d'],
                    subDisctrict: ['', Validators.required],
                    district: ['', Validators.required],
                    province: ['', Validators.required],
                    zipcode: ['', Validators.required]
                })
            ])
        });
    }

    onSubmit() {
        this.isSubmitted = true;
        console.log(this.form2.value);
        console.log(this.form2);
    }

    createForm() {
        this.form2 = this.fb.group({
            prename: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            tel: ['', Validators.required],
            email: [''],
            address: this.fb.array([
                this.fb.group({
                    houseNo: ['', Validators.required],
                    buildingName: [''],
                    villageName: [''],
                    villageNo: [''],
                    subDisctrict: ['', Validators.required],
                    district: ['', Validators.required],
                    province: ['', Validators.required],
                    zipcode: ['', Validators.required]
                })
            ])
        });

        const xxx = this.form2;
    }

    createNewAddress() {
        const cloneAddressValue = this.Address.controls[0] as FormGroup;
        const newAddressForm = this.createAddressForm();
        newAddressForm.patchValue(cloneAddressValue.value);
        this.Address.push(newAddressForm);
    }


    get Address() {
        return this.form2.controls['address'] as FormArray;
    }

    deleteAddress(formIndex: number) {
        this.Address.removeAt(formIndex);
    }

    createAddressForm() {
        return this.fb.group({
            houseNo: ['', Validators.required],
            buildingName: [''],
            villageName: [''],
            villageNo: [''],
            subDisctrict: ['', Validators.required],
            district: ['', Validators.required],
            province: ['', Validators.required],
            zipcode: ['', Validators.required]
        })
    }

}