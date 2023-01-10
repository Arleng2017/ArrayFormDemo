import { Component, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddressComponent } from './components/address/address.component';
import { ComfirmDialogComponent } from './../shared/comfirm-dialog/comfirm-dialog.component'
import { ConfigurationServices } from '../shared/services/configuration.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./user.component.scss']
})
export class UsersComponent implements OnInit {
    isSubmitted: boolean = false;
    form: FormGroup;
    prefix$ = []

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(private fb: FormBuilder, private modalService: NgbModal) {
        this.form = this.fb.group({
            personalInformation: this.fb.group({
                personalInfo: this.fb.group({
                    prename: ['', Validators.required],
                    firstName: ['', Validators.required],
                    lastName: ['', Validators.required],
                    dateOfBirth: ['', Validators.required],
                    weigth: ['', Validators.required],
                    height: ['', Validators.required]
                }),
                contacts: this.fb.group({
                    tel: ['', Validators.required],
                    email: [''],
                })
            }),
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

    ngOnInit(): void {
    }

    onSubmit() {
        this.isSubmitted = true;
        console.log(this.form.value);
        console.log(this.form);
    }

    createNewAddress() {
        const addressLength = this.Address.controls.length;
        if (addressLength >= 3) {
            alert('ไม่สามารถเพิ่มได้ เนื่องจากที่อยู่เกินจำนวนที่กำหนด!');
            return
        };
        const cloneAddressValue = this.Address.controls[0] as FormGroup;
        const newAddressForm = this.createAddressForm();
        newAddressForm.patchValue(cloneAddressValue.value);
        this.Address.push(newAddressForm);
    }

    get Address() {
        return this.form.controls['address'] as FormArray;
    }

    get personalInformation() {
        return this.form.controls['personalInformation'];
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

    openModal() {
        const modalRef = this.modalService.open(ComfirmDialogComponent);
        console.log(modalRef.result);
        // modalRef.componentInstance.lesson = lesson;
    }
}