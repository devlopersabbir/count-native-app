export interface ICountSliceState {
    lists: ICount[] | null;
}

// export interface ICounterSliceState {

// }

export interface ICount {
    uuid: string;
    name?: string;
    count: number;
}