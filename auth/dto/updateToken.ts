import { Payload } from 'types/common';
import { ITokens } from '../common';

export type BearerRefreshTokenHeader = {
  Authorization: ITokens['refreshToken'];
};

export type BearerAccessTokenHeader = {
  Authorization: ITokens['accessToken'];
};

export type UpdateToken = Payload<
  BearerRefreshTokenHeader,
  undefined,
  undefined,
  ITokens
>;
