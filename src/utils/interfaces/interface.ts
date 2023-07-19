export interface ICountSliceState {
    lists: ICount[] | null;
}

export interface ICount {
    uuid: string;
    name?: string;
    count: number;
}