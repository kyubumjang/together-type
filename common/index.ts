type ValueType = string | number | boolean;
export type Union<
  T extends { [key: string]: ValueType } | ReadonlyArray<ValueType>,
> = T extends ReadonlyArray<ValueType>
  ? T[number]
  : T extends { [key: string]: infer U }
  ? U
  : never;

export type Payload<
  Header = undefined,
  Query = undefined,
  Body = undefined,
  Response = undefined,
> = {
  Request: {
    header: Header;
    query: Query;
    body: Body;
  };
  Response: Response;
};

export interface IBaseTimeEntity {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface IBaseEntity extends IBaseTimeEntity {
  id: number;
}

export interface IListPagination<T> {
  totalCount: number;
  list: Array<T>;
  page: number;
  take: number;
  totalPages: number;
  hasNext: boolean;
}

export interface IPaginationQuery {
  page: number;
  take: number;
}
