import Store from '../store';

export function useClientDetails() {
    const [{baseVals}, setState] = Store.useStore();

    const loadDefaults = () => {
        let testBaseVals = "hello";

        console.log('loading defaults in hook');

        setState(draft => {
            console.log('draft');
            console.log(draft);
            draft.baseVals = testBaseVals;
        })
    }

    const addDefault = () => {
        let defaultToAdd = " world!"

        let newBaseVals = baseVals + defaultToAdd;

        setState(draft => {
            console.log('draft');
            console.log(draft);
            draft.baseVals = newBaseVals;
        })

    }

    return {
        baseVals,
        loadDefaults,
        addDefault
    }

}