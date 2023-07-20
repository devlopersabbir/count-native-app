import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICount, ICountSliceState } from "../../utils/interfaces/interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

const initialState: ICountSliceState = {
    lists: null,
};

AsyncStorage.getItem("counterList").then((countLists: any) => {
    initialState.lists = JSON.parse(countLists);
});

const saveCountLists = (countLists: ICount[]) => {
    AsyncStorage.setItem("counterList", JSON.stringify(countLists));
};

const countListSlice = createSlice({
    name: "countList",
    initialState,
    reducers: {
      addCountList: (state, action: PayloadAction<string>) => {
          const newCountList: ICount = {
              uuid: uuid.v4() as string,
              name: action.payload,
              count: 0,
          };

          state.lists = [...(state.lists as any), newCountList];
          saveCountLists(state.lists);
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
              saveCountLists(state.lists as ICount[]);
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
              saveCountLists(state.lists as ICount[]);
          }
      },

      deleteCountList: (state, action: PayloadAction<{ uuid: string }>) => {
          const { uuid } = action.payload;
          state.lists = state.lists?.filter(
              (list) => list.uuid !== uuid
          ) as ICount[];
          saveCountLists(state.lists);
        }  
    },
});

export const { addCountList, deleteCountList, updateCount, updateName } =
    countListSlice.actions;
export default countListSlice.reducer;
