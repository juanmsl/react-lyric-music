import { Band } from '@domain';

export interface BandsPort {
  getBands: () => Promise<Array<Band>>;
}
