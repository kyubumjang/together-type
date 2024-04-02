import { IBaseEntity } from 'types/common';
import { IPost } from 'types/post/common';

export interface IUser extends IBaseEntity {
  githubId: number;
  avatarUrl: string;
  githubUrl: string;
  nickname: string;
  introduction: string;
  refreshToken: string;
}

export interface IUserShow extends Omit<IUser, 'githubId' | 'refreshToken'> {}

export interface IGetUserWithNonLogin extends IUserShow {
  subscriberCnt: number;
  posts: IPost[];
}

export interface IGetUserWithLogin extends IGetUserWithNonLogin {
  isSubscribed: boolean;
}
