import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from 'src/app/services/auth.service';
import {ToastsService} from 'src/app/services/toasts.service';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-modal-register',
    templateUrl: './modal-register.component.html',
    styleUrls: ['./modal-register.component.scss']
})
export class ModalRegisterComponent implements OnInit {

    public saving: boolean;
    public form: FormGroup;

    public formFields: {
        autocomplete?: string,
        formControlName: string,
        type?: string,
        label: string
    }[];

    constructor(private authService: AuthService,
                private toastsService: ToastsService,
                private router: Router,
                private actr: ActivatedRoute,
                private activeModal: NgbActiveModal) {

        this.form = new FormGroup({
            firstName: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            lastName: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
        });

        this.formFields = [
            {
                label: 'Email',
                formControlName: 'email',
                autocomplete: 'emassssssil',
            },
            {
                label: 'First Name',
                formControlName: 'firstName',
                autocomplete: 'firstName',
            },
            {
                label: 'Last Name',
                formControlName: 'lastName',
                autocomplete: 'lastName',
            },
            {
                label: 'Password',
                formControlName: 'password',
                type: 'password',
                autocomplete: 'current-password',
            },
        ];
    }

    public submit = async () => {
        this.saving = true;

        if (!this.form.valid) {
            this.form.markAsTouched();
            this.toastsService.display('Check the form before submitting.');
            return;
        }
        this.saving = true;
        try {
            this.authService.register(this.form.value).subscribe(res => {
                this.router.navigate(['']);
                this.activeModal.close();
                this.toastsService.display('Account created succesfully!');
            });


        } catch (e) {
            this.toastsService.display(e);
        }
        this.saving = false;
    }


    ngOnInit(): void {
    }


}
