export enum routesEnum {
  HOME = 'HOME',
  DETAIL_CONTACT = 'DETAIL_CONTACT',
}

export type RoutesParamList = {
  [routesEnum.HOME]: undefined;
  [routesEnum.DETAIL_CONTACT]: {id: string};
};
