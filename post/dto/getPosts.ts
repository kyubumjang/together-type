import { IListPagination, IPaginationQuery, Payload } from 'types/common';
import { IPostWithWriterLogin, IPostWithWriterNonLogin } from '../common';
import { BearerAccessTokenHeader } from 'types/auth/dto/updateToken';

export type IGetPostsQueryDto = IPaginationQuery;

export type GetPosts = Payload<
  undefined | BearerAccessTokenHeader,
  IGetPostsQueryDto,
  undefined,
  | IListPagination<IPostWithWriterLogin>
  | IListPagination<IPostWithWriterNonLogin>
>;
