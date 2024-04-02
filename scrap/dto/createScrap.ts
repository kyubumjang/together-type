import { Payload } from 'types/common';
import { BearerAccessTokenHeader } from 'types/auth/dto/updateToken';
import { IScrap } from '../common';

export type CreateScrap = Payload<
  BearerAccessTokenHeader,
  undefined,
  undefined,
  IScrap
>;
