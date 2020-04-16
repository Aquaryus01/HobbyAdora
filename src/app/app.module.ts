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
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModalLoginComponent} from './components/modal-login/modal-login.component';
import {ModalRegisterComponent} from './components/modal-register/modal-register.component';

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
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgbModule
    ],
    providers: [
        TestResolver,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
