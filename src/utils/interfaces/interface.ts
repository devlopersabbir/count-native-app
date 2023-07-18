export interface ICountSliceState {
    lists: ICount[] | null;
}

export interface ICounterSliceState {
    name?: string | null;
    count?: number;
}


export interface ICount {
    uuid: string;
    name?: string;
    count?: number;
}