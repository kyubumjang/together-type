import { Payload } from 'types/common';
import { ITokens } from '../common';

export type BearerAccessTokenHeader = {
  Authorization: ITokens['accessToken'];
};

export type UpdateToken = Payload<undefined, undefined, undefined, ITokens>;
