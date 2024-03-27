import { IBaseEntity, Union } from 'types/common';
import { IUser, IUserShow } from 'types/user/common';

export interface IPost extends IBaseEntity {
  writerId: IUser['id'];
  title: string;
  thumbnail: string;
  link: string;
  description: string;
  category: PostCategory;
}

export const PostCategory = {
  COMMON_DEV: 'COMMON_DEV',
  WEB_DEV: 'WEB_DEV',
  JAVASCRIPT: 'JAVASCRIPT',
  REACT: 'REACT',
  VUEJS: 'VUEJS',
  ANGULAR: 'ANGULAR',
  NODEJS: 'NODEJS',
  JAVA: 'JAVA',
  PYTHON: 'PYTHON',
  PHP: 'PHP',
  INFRA_STRUCTURE: 'INFRA_STRUCTURE',
  DATABASE: 'DATABASE',
  ANDROID: 'ANDROID',
  IOS: 'IOS',
  GIT: 'GIT',
  AI: 'AI',
} as const;

export type PostCategory = Union<typeof PostCategory>;

export interface IPostWithWriter extends Omit<IPost, 'writerId'> {
  Writer: IUserShow;
}
