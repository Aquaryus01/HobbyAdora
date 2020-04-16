import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastsService } from '../../services/toasts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLoginComponent } from 'src/app/components/modal-login/modal-login.component';

@Component({
    selector: 'app-login',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

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
        private modalService: NgbModal) {
        this.form = new FormGroup({
            username: new FormControl('email', [
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

    public ngOnInit() {
    }

    open() {
        const modalRef = this.modalService.open(ModalLoginComponent);
        modalRef.componentInstance.name = 'World';
    }

    // public submit = async () => {
    //     this.saving = true;

    //     if (!this.form.valid) {
    //         this.form.markAsTouched();
    //         this.toastsService.display('Check the form before submitting.');
    //         return;
    //     }
    //     this.saving = true;
    //     try {
    //         await this.authService.login(this.form.value);
    //         await this.router.navigate(['']);
    //         this.toastsService.display('Logged in successfully!');
    //     } catch (e) {
    //         this.toastsService.display(e);
    //     }
    //     this.saving = false;
    // };
}
