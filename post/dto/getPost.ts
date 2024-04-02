import { Payload } from 'types/common';
import { BearerAccessTokenHeader } from 'types/auth/dto/updateToken';

export type GetPost = Payload<
  undefined | BearerAccessTokenHeader,
  undefined,
  undefined,
  undefined
>;
