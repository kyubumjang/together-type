import { Payload } from 'types/common';
import { BearerAccessTokenHeader } from 'types/auth/dto/updateToken';
import { IPost } from '../common';

export interface ICreatePostDto {
  link: IPost['link'];
  category: IPost['category'];
}

export type CreatePost = Payload<
  BearerAccessTokenHeader,
  undefined,
  ICreatePostDto,
  IPost
>;
