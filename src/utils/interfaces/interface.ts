export interface ICountSliceState {
    lists: ICount[] | null;
    selectedItem?: ICount | null;
}

export interface ICount {
    uuid: string;
    name?: string;
    count: number;
}