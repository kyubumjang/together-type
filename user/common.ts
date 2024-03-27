import { IBaseEntity } from 'types/common';

export interface IUser extends IBaseEntity {
  githubId: number;
  avatarUrl: string;
  githubUrl: string;
  nickname: string;
  introduction: string;
  refreshToken: string;
}

export interface IUserShow extends Omit<IUser, 'githubId' | 'refreshToken'> {}
