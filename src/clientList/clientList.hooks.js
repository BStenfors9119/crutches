import Store from '../store';

export function useClientList() {
    const [{selectedClient}, setState] = Store.useStore();

    const onClientSelected = (clientId) => {
        let testBaseVals = "hello";

        console.log('loading defaults in hook');

        setState(draft => {
            console.log('draft');
            console.log(draft);
            draft.selectedClient = clientId;
        })
    }

    return {
        selectedClient,
        onClientSelected
    }

}