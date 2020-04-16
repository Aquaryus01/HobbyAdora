import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {TestResolver} from './resolvers/test.resolver';
import {LoginPageComponent} from './pages/login-page/login-page.component';


const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full',
        resolve: { tests: TestResolver }
    },
    {
        path: 'login',
        component: LoginPageComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
