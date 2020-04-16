import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {TestService} from '../services/test.service';
import {TestModel} from '../models/test.model';

@Injectable()
export class TestResolver implements Resolve<any> {

    constructor(private testService: TestService) {
    }

    public async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<TestModel[]> {
        // return await this.testService.getAll();
        return [];
    }
}
