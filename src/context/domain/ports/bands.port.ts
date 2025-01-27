import { Band, BandDetails } from '@domain';

export interface BandsPort {
  getBands: () => Promise<Array<Band>>;
  getBandDetails: (bandId: string) => Promise<BandDetails>;
}
