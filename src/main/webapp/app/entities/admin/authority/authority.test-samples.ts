import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '7e647e63-e7f0-4db3-a4c5-8bc91c82e169',
};

export const sampleWithPartialData: IAuthority = {
  name: '9e880dd3-b536-458b-8ea6-3f39352d9481',
};

export const sampleWithFullData: IAuthority = {
  name: '8abd40e8-0e42-4132-a31b-9978a2fef586',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
