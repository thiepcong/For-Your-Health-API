import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 15823,
  login: 'tyEf$@KEv\\a8Jm\\pI5Rw',
};

export const sampleWithPartialData: IUser = {
  id: 23866,
  login: 'Mz.&m@AhAWf0\\;X8\\USs9\\re9mmc\\DT4e\\(ZE',
};

export const sampleWithFullData: IUser = {
  id: 19952,
  login: 'zh',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
