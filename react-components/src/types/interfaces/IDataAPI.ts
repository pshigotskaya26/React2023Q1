import { IDataApiInfo } from './IDataApiInfo';
import { ICharacter } from './ICharacter';

export interface IDataAPI {
  info: IDataApiInfo;
  results: ICharacter[];
}
