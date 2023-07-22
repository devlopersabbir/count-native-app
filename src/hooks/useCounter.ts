import { useDispatch, useSelector } from "react-redux";
import { ICount } from "../utils/interfaces/interface";
import { addCountList, deleteCount, setAllList, updateCount, updateName } from "../redux/slice/countSlice";

const useCounter = () => {
    const { lists } = useSelector(({ countReducer }) => countReducer);
    const dispatch = useDispatch();

    const setAllCountList = (lists: ICount[]) => {
        dispatch(setAllList(lists));
    };
    const setNewCountList = (item: ICount) => {
        dispatch(addCountList(item));
    };
    const updateSingleCount = (count: number, uuid: string) => {
        dispatch(updateCount({ uuid, count }))
    };
    const deleteSingleCount = (uuid: string) => {
        dispatch(deleteCount({ uuid }))
    };
    const updateSingelCountName = (uuid: string, name: string) => {
        dispatch(updateName({ uuid, name }))
    }

    return {
        countList: lists,
        setAllLists: setAllCountList,
        addNewList: setNewCountList,
        update: updateSingleCount,
        delete: deleteSingleCount,
        updateName: updateSingelCountName
    };
};

export default useCounter;
