import { Payload } from 'types/common';
import { BearerAccessTokenHeader } from 'types/auth/dto/updateToken';

export type DeleteSubscription = Payload<
  BearerAccessTokenHeader,
  undefined,
  undefined,
  undefined
>;
