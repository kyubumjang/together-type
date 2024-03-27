import { IBaseTimeEntity } from 'types/common';
import { IUser, IUserShow } from 'types/user/common';

export interface ISubscription extends IBaseTimeEntity {
  subscriberId: IUser['id'];
  targetUserId: IUser['id'];
}

export interface IGetSubScriptions {
  userId: ISubscription['subscriberId'];
  TargetUser: IUserShow;
}
