import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ToastsService {
    public toasts: {message: string}[] = [];

    constructor() {}

    // TODO: This should be able to receive a param specifying the id of the toast
    public clear() {
        this.toasts = [];
    }

    public display(message: string): void {
        this.toasts.push({message});
    }
}
