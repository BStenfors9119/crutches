import Store from '../store';
import axios from 'axios';
import {useBatches} from "../store/batches.hooks";

export function useBatchList() {
    const [{batches}, setState] = Store.useStore();
    const {loadAllBatches} = useBatches();

    const onBatchSelected = (batchId) => {
        setState(draft => {
            console.log('draft');
            console.log(draft);
            draft.selectedBatch = batchId;
        })
    }

    const loadBatches = () => {
        console.log('loading batches');
        loadAllBatches();
    }

    const loadBatchesByClientId = (clientId) => {

    }

    return {
        batches,
        onBatchSelected,
        loadBatches
    }

}