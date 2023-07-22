import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICount, ICountSliceState } from "../../utils/interfaces/interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

const initialState: ICountSliceState = {
    lists: [],
};

// AsyncStorage.getItem("counterList").then((countLists: any) => {
//     initialState.lists = JSON.parse(countLists);
// });

const saveCountLists = (countLists: ICount[]) => {
    AsyncStorage.setItem("count-list", JSON.stringify(countLists));
};

const countListSlice = createSlice({
    name: "countList",
    initialState,
    reducers: {
        setAllList: (state, action: PayloadAction<ICount[]>) => {
            state.lists = action.payload;
        },

        addCountList: (state, action: PayloadAction<ICount>) => {
            state.lists = [...(state.lists as any), action.payload];

            saveCountLists(state.lists)
      },
      updateCount: (
          state,
          action: PayloadAction<{ uuid: string; count: number }>
      ) => {
          const { uuid, count } = action.payload;

          // find and update
          const singleList = state.lists?.find(
              (list: ICount) => list.uuid === uuid
          );

          if (singleList) {
              singleList.count += count;
              //   saveCountLists(state.lists as ICount[]);
          }
      },
      updateName: (
          state,
          action: PayloadAction<{ uuid: string; name: string }>
      ) => {
          const { uuid, name } = action.payload;

          // find and update
          const singleList = state.lists?.find(
              (list: ICount) => list.uuid === uuid
          );
          if (singleList) {
              singleList.name = name;
              //   saveCountLists(state.lists as ICount[]);
          }
      },

        deleteCount: (state, action: PayloadAction<{ uuid: string }>) => {
          const { uuid } = action.payload;
          state.lists = state.lists?.filter(
              (list) => list.uuid !== uuid
          ) as ICount[];
      //   saveCountLists(state.lists);
        },
    },
});

export const {
    setAllList,
    addCountList,
    deleteCount,
    updateCount,
    updateName,
} = countListSlice.actions;
export default countListSlice.reducer;
