import { configureStore } from "@reduxjs/toolkit";
import {Storage} from './Item';

export const store =  configureStore(
    {
        reducer : {
            store:Storage.reducer
        }
    }
)
// export default store