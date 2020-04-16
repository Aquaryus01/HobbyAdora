import {Component, HostListener, OnInit} from '@angular/core';
import {MenuItemModel} from '../../models/menu-item.model';
import {AuthService} from '../../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLoginComponent } from '../modal-login/modal-login.component';
import { ModalRegisterComponent } from '../modal-register/modal-register.component';
import { ModalAddComponent } from '../modal-add/modal-add.component';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    public menuItems: MenuItemModel[] = [
        {
            name: 'Home',
            url: '/',
            children: [ {
                name: 'Child',
                url: '/',
                children: []
            } ]
        },
        {
            name: 'About',
            url: '/',
            children: [],
        },
    ];

    public rightMenuItems: MenuItemModel[] = [];

    public scrolled = false;
    public authState: boolean;

    constructor(private authService: AuthService,
                private modalService: NgbModal) {
        this.authState = this.authService.authState();
        this.setAuthMenuItems();
        this.authService.authStateChanged().subscribe(state => {
            console.log(state)
            this.authState = state;
            this.setAuthMenuItems();
        });
    }

    ngOnInit(): void {
    }

    private setAuthMenuItems() {
        if (this.authState) {
            this.rightMenuItems = [ { name: 'Add new Skill', action: () => this.addSkilModal(), children: [] },
                                    { name: 'Logout', action: () => this.authService.logout(), children: [] } ];
        } else {
            this.rightMenuItems = [{ name: 'Login',     action: () => this.loginModal() , children: [] },
                                   { name: 'Register',  action: () => this.registerModal() , children: [] }];
            
        }
    }

    loginModal() {
        return this.modalService.open(ModalLoginComponent);
    }

    registerModal() {
        return this.modalService.open(ModalRegisterComponent)
    }

    addSkilModal(){
        return this.modalService.open(ModalAddComponent)
    }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(e) {
        this.scrolled = window.pageYOffset > 0;
    }
}
