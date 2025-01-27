import { Band, BandDetails, BandDetailsInstance, BandInstance, BandsPort } from '@domain';

export class BandsMockAdapter implements BandsPort {
  static timeout = 3000;

  getBands() {
    return new Promise<Array<Band>>(resolve => {
      setTimeout(() => resolve(BandInstance), BandsMockAdapter.timeout);
    });
  }

  getBandDetails() {
    return new Promise<BandDetails>(resolve => {
      setTimeout(() => resolve(BandDetailsInstance), BandsMockAdapter.timeout);
    });
  }
}
