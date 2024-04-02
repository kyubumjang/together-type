import { Payload } from 'types/common';
import { BearerAccessTokenHeader } from 'types/auth/dto/updateToken';
import { IGetUserWithLogin, IGetUserWithNonLogin } from '../common';

export type GetUser = Payload<
  undefined | BearerAccessTokenHeader,
  undefined,
  undefined,
  IGetUserWithLogin | IGetUserWithNonLogin
>;
