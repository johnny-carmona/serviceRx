# react-service-rx

This is a simple library to keep the UI state through services instead of using the overhead of some other state management tools.

## Installation 

```
    npm i react-service-rx
```

## Usage

First we create a service for a particular section of the UI. Lest say we want to have a react component that shows the score of a game. So, we first create a service with it's initial state like such:

```
    import {ServiceRx} from 'react-service-rx';

    export type Score = {
        home: number,
        visit: number
    }

    export const scoreService = new ServiceRx<Score>({home: 10, visit: 0});
```
We could also create the service as a class that extends ServiceRx in case that we want to add other methods or properties to the service.

The next step is using the custom react hook useService, the hook returns an array with the state and an update function that we can use to update the state of the service if needed.

```
    import {useService} from 'react-service-rx';
    import {scoreService, Score} from '../services/score.service';

    export function ScoreCard() {
        const [state, update] = useService<Score>(scoreService);

        const handleClick = () => {
            update({home: 0, visit: 0});
        }

        return (
        <div>
            home: {state.home}<br/>
            visit: {state.visit}<br/>
            <button onClick={handleClick}>Reset</button>
        </div>
        )
    }
```

This way we can divide the different parts of the state using separate services, each one scoped to it's purpose. So we could have one service that only handles error messages, modal states or any global UI state that we might need in the app and having all of these components subscribed to these services using the useService hook.


