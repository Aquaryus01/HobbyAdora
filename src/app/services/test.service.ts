import {Injectable, Injector} from '@angular/core';
import {EntityService} from './entity.service';
import {TestModel} from '../models/test.model';

@Injectable({
    providedIn: 'root',
})
export class TestService extends EntityService<TestModel> {
    public entityName = 'Test';

    constructor(protected injector: Injector) {
        super(injector);
    }
}
