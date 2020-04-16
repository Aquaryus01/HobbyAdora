import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AuthService} from 'src/app/services/auth.service';
import {ToastsService} from 'src/app/services/toasts.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-modal-login',
    templateUrl: './modal-login.component.html',
    styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {
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
            email: new FormControl('email', [
                Validators.required,
                Validators.email,
                Validators.minLength(4),
            ]),
            password: new FormControl('password', [
                Validators.required,
                Validators.minLength(4),
            ]),
        });

        this.formFields = [
            {
                label: 'Email',
                formControlName: 'email',
                autocomplete: 'email',
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
            this.authService.login(this.form.value).subscribe((res: { token: string }) => {
                    this.router.navigate(['']);
                    this.authService.saveSession(res.token);
                    this.activeModal.close();
                    this.toastsService.display('Logged in successfully!');

                },
                (err => {
                    console.log(err);
                    this.toastsService.display('Authentication failed.');
                })
            );
        } catch (e) {
            this.toastsService.display(e);
        }
        this.saving = false;
    };


    ngOnInit(): void {
    }

}
