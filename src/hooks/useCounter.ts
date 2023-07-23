import { useDispatch, useSelector } from "react-redux";
import { ICount, ICountSliceState } from "../utils/interfaces/interface";
import {
    addCountList,
    deleteCount,
    setAllList,
    set_selected_item,
    unset_selected_item,
    updateCount,
    updateName,
} from "../redux/slice/countSlice";

const useCounter = () => {
    const lists: ICountSliceState = useSelector(
        ({ countReducer }) => countReducer
    );
    const dispatch = useDispatch();

    const setAllCountList = (lists: ICount[]) => {
        dispatch(setAllList(lists));
    };
    const setNewCountList = (item: ICount) => {
        dispatch(addCountList(item));
    };
    const updateSingleCount = (count: number, uuid: string) => {
        dispatch(updateCount({ uuid, count }));
    };
    const deleteSingleCount = (uuid: string) => {
        dispatch(deleteCount({ uuid }));
    };
    const updateSingelCountName = (uuid: string, name: string) => {
        dispatch(updateName({ uuid, name }));
    };
    const setSelectedItem = (item: ICount) => {
        dispatch(set_selected_item(item));
    };
    const unsetSelectedItem = () => {
        dispatch(unset_selected_item());
    };

    return {
        countListState: {
            lists: lists.lists,
            selectedItem: lists.selectedItem
        },
        setAllLists: setAllCountList,
        addNewList: setNewCountList,
        update: updateSingleCount,
        delete: deleteSingleCount,
        updateName: updateSingelCountName,
        setSelectedItem,
        unsetSelectedItem,
    };
};

export default useCounter;
