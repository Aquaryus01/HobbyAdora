import {Component, OnInit} from '@angular/core';
import {ToastsService} from '../../services/toasts.service';

@Component({
    selector: 'app-toasts-list',
    templateUrl: './toasts-list.component.html',
    styleUrls: ['./toasts-list.component.scss']
})
export class ToastsListComponent implements OnInit {
    constructor(public toastsService: ToastsService) {}

    ngOnInit(): void {}
}
