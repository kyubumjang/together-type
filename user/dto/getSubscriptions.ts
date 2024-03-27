import { BearerAccessTokenHeader } from 'types/auth/dto/updateToken';
import { IListPagination, IPaginationQuery, Payload } from 'types/common';
import { IGetSubScriptions } from 'types/subscription/common';

export type IGetSubscriptionsQueryDto = IPaginationQuery;

export type GetSubscriptions = Payload<
  BearerAccessTokenHeader,
  IGetSubscriptionsQueryDto,
  undefined,
  IListPagination<IGetSubScriptions>
>;
