import { Payload } from 'types/common';
import { BearerAccessTokenHeader } from 'types/auth/dto/updateToken';
import { ISubscription } from '../common';

export type CreateSubscription = Payload<
  BearerAccessTokenHeader,
  undefined,
  undefined,
  ISubscription
>;
