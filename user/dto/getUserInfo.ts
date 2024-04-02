import { Payload } from 'types/common';
import { BearerAccessTokenHeader } from 'types/auth/dto/updateToken';
import { IUserShow } from '../common';

export type GetUserInfo = Payload<
  BearerAccessTokenHeader,
  undefined,
  undefined,
  IUserShow
>;
