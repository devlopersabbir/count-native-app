import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICount, ICountSliceState } from "../../utils/interfaces/interface";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState: ICountSliceState = {
    lists: []
}

AsyncStorage.getItem("counterList").then((list) => {
    const readyToSetList: ICount[] = JSON.parse(list as string)
    initialState.lists = readyToSetList
}).catch(error => console.log('error: ', error))


export const countSlice = createSlice({
    name: "countList",
    initialState,
    reducers: {
        create_new_count: (state: ICountSliceState, action: PayloadAction<ICount>) => {
            state.lists?.push(action.payload)
            console.log("current state: ", state.lists)

            // storage list into local storage
            AsyncStorage.setItem("counterList", JSON.stringify(state.lists))
        },
        delete_counter: (state: ICountSliceState, action: PayloadAction<ICount>) => {
            const { uuid } = action.payload;
            const index = state.lists?.findIndex(item => item.uuid === uuid);
            if (index !== -1) {
                state.lists?.slice(index, 1);
            }

            AsyncStorage.setItem("counterList", JSON.stringify(state.lists))
        }
    }
})


export const { create_new_count, delete_counter } = countSlice.actions;
export default countSlice.reducer