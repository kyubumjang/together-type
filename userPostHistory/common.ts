import { IBaseTimeEntity } from 'types/common';
import { IPost } from 'types/post/common';
import { IUser } from 'types/user/common';

export interface IUserHistory extends IBaseTimeEntity {
  userId: IUser['id'];
  postId: IPost['id'];
  viewedAt: Date;
}
