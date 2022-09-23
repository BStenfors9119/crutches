import Store from '../store';
import axios from 'axios';

export function useSearch() {
    const [{batches}, setState] = Store.useStore();

    const onBatchSelected = (batchId) => {
        setState(draft => {
            console.log('draft');
            console.log(draft);
            draft.selectedBatch = batchId;
        })
    }

    const loadBatches = () => {
        console.log('loading batches');

    }

    const loadBatchesByClientId = (clientId) => {

    }

    return {
        batches,
        onBatchSelected,
        loadBatches
    }

}