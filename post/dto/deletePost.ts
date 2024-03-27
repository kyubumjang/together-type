import { Payload } from 'types/common';
import { BearerAccessTokenHeader } from 'types/auth/dto/updateToken';

export type DeletePost = Payload<
  BearerAccessTokenHeader,
  undefined,
  undefined,
  undefined
>;
