import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICount, ICountSliceState } from "../../utils/interfaces/interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

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
        addCountList: (state: ICountSliceState, action: PayloadAction<string>) => {
            const newCountList: ICount = {
                uuid: uuid.v4() as string,
                name: action.payload,
                count: 0
            }
            state.lists?.push(newCountList)
        },
        updateCount: (state: ICountSliceState, action: PayloadAction<ICount>) => {
            const { count, uuid } = action.payload;
            const countList = state.lists?.find((list: ICount) => list.uuid === uuid);

            if (countList) {
                countList.count += count;
            }
        },
        updateName: (state: ICountSliceState, action: PayloadAction<ICount>) => {
            const { uuid, name } = action.payload;
            const countList = state.lists?.find((list: ICount) => list.uuid === uuid);
            if (countList) {
                countList.name = name;
            }
        },
        deleteCountList: (state, action: PayloadAction<ICount>) => {
            const index = state.lists?.findIndex((list: ICount) => list.uuid === action.payload.uuid);
            if (index !== -1) {
                console.log('delete:', index)
                state.lists?.splice(index as number, 1)
            }
        },
    }
})


export const { addCountList, deleteCountList, updateCount, updateName } = countSlice.actions;
export default countSlice.reducer