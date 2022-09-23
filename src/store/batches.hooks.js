import Store from '.';
import axios from 'axios';

export function useBatches() {
    const [{selectedBatch, batches, batchApiUrl}, setState] = Store.useStore();

    const loadAllBatches = async () => {
        let batches = await axios.get(`${batchApiUrl}/batches`)
        setState(draft => {
            draft.batches = batches.data.batches;
        })
    }

    const loadBatchById = async (batchId) => {
        let batch = null ;
        try {
            batch = await axios.get(`${batchApiUrl}/find?batchId=${batchId}`)
        } catch (err) {
            console.log('Error retrieving batch')
            console.log(err);
        }

        console.log('load all batches');
        console.log(batch.data.batches);

        setState(draft => {
            draft.selectedBatch = batch.data.batches
        })
    }


    return {
        selectedBatch,
        batches,
        loadAllBatches,
        loadBatchById
    }
}