import { BehaviorSubject } from 'rxjs';

export class ServiceRx<Type>{
    private _State$;

    constructor(initialState: Type) {
        this._State$ = new BehaviorSubject<Type>(initialState);
    }

    public get state$() {
        return this._State$;
    }

    public update = (newState: any): void => {
        this._State$.next({ ...this._State$.value, ...newState });
    }
};