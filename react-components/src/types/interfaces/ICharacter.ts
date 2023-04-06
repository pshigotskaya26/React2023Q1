import { ICharacterLocation } from './ICharacterLocation';
import { ICharacterOrigin } from './ICharacterOrigin';

export interface ICharacter {
  id: number;
  name: string;
  image: string;
  created: string;
  episode: string[];
  location: ICharacterLocation;
  origin: ICharacterOrigin;
  gender: string;
  species: string;
  status?: string;
  type: string;
  url: string;
}
