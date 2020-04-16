import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastsService } from 'src/app/services/toasts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.scss']
})
export class ModalAddComponent implements OnInit {

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
              private activeModal: NgbActiveModal,
              private eventService: EventsService) {

      this.form = new FormGroup({
          title: new FormControl('', [
              Validators.required,
          ]),
          url: new FormControl('', [
            Validators.required,
        ]),
      });

      this.formFields = [
          {
              label: 'Titlu Hobby',
              formControlName: 'title',
              autocomplete: 'title',
          },
          {
            label: 'Image url',
            formControlName: 'url',
            autocomplete: 'url',
        },
      ];
  }

  public submit = async () => {
    this.eventService.addEvent(this.form.controls['title'].value,
    this.form.controls['url'].value)
  };


  ngOnInit(): void {
  }
}
