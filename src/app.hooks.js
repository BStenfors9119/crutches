import Store from './store';
// import {useNavigate} from "react-router-dom";

export function useApp() {
    const [{openDrawer, clientSelected}, setState] = Store.useStore();
    // let history = useNavigate()

    const showDrawer = () => {
        let shouldOpenDrawer = !openDrawer;

        console.log('loading defaults in hook');

        setState(draft => {
            console.log('draft');
            console.log(draft);
            draft.openDrawer = shouldOpenDrawer;
        })
    }

    const onClientSelected = (name) => {
        setState(draft => {
            draft.clientSelected = name;
        })

        // if (history !== undefined) {
        //     history.push("/client")
        // }
    }


    return {
        openDrawer,
        showDrawer,
        onClientSelected
    }

}