import { useState, useEffect } from 'react';
import { ServiceRx } from './ServiceRx';

export function useService<Type>(service: ServiceRx<Type>): [Type, Function] {
    const [state, setState] = useState(service.state$.value);

    useEffect(() => {
        const observers = service.state$.subscribe(setState);
        return function cleanup() {
            observers.unsubscribe();
        }
    })

    return [state, service.update];
}