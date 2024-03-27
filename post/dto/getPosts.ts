import { IListPagination, IPaginationQuery, Payload } from 'types/common';
import { IPostWithWriter } from '../common';

export type IGetPostsQueryDto = IPaginationQuery;

export type GetPosts = Payload<
  undefined,
  IGetPostsQueryDto,
  undefined,
  IListPagination<IPostWithWriter>
>;
