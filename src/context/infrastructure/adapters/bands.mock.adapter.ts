import { Band, BandInstance, BandsPort } from '@domain';

export class BandsMockAdapter implements BandsPort {
  static timeout = 3000;

  getBands() {
    return new Promise<Array<Band>>(resolve => {
      setTimeout(() => resolve(BandInstance), BandsMockAdapter.timeout);
    });
  }
}
