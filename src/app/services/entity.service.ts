import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { EntityModel } from '../models/entity.model';

@Injectable({
    providedIn: 'root',
})
export abstract class EntityService<T extends EntityModel> {
    public abstract entityName: string;

    protected constants: ConstantsService;
    protected http: HttpClient;

    protected constructor(protected injector: Injector) {
        this.constants = injector.get(ConstantsService);
        this.http = injector.get(HttpClient);
    }

    public async getOne(id: string): Promise<T> {
        const url = `${this.constants.apiUrl}${this.entityName}/${id}`;
        return this.http.get<T>(url).toPromise();
    }

    public async getAll(): Promise<T[]> {
        const url = `${this.constants.apiUrl}${this.entityName}`;
        return this.http.get<T[]>(url).toPromise();
    }
}
