import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TestComponentComponent} from './components/test-component/test-component.component';
import {TestResolver} from './resolvers/test.resolver';
import {HttpClientModule} from '@angular/common/http';
import {MenuComponent} from './components/menu/menu.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {ToastsListComponent} from './components/toasts-list/toasts-list.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { ModalRegisterComponent } from './components/modal-register/modal-register.component';
import { HomepageSidebarComponent } from './components/homepage-sidebar/homepage-sidebar.component';
import { HomepageMainComponent } from './components/homepage-main/homepage-main.component';
import { EventItemComponent } from './components/event-item/event-item.component';
import { SidebarItemComponent } from './components/sidebar-item/sidebar-item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { SkillPageComponent } from './pages/skill-page/skill-page.component';
import { ModalAddComponent } from './components/modal-add/modal-add.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        TestComponentComponent,
        MenuComponent,
        LoginPageComponent,
        ToastsListComponent,
        ModalLoginComponent,
        ModalRegisterComponent,
        HomepageSidebarComponent,
        HomepageMainComponent,
        EventItemComponent,
        SidebarItemComponent,
        SearchBarComponent,
        EventPageComponent,
        SkillPageComponent,
        ModalAddComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FormsModule,
        NgbModule
    ],
    providers: [
        TestResolver,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
