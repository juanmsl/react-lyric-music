import { BandsPort } from '@domain';

export class BandsController implements BandsPort {
  private adapter: BandsPort;

  constructor(adapter: BandsPort) {
    this.adapter = adapter;
  }

  getBands() {
    return this.adapter.getBands();
  }

  getBandDetails(bandId: string) {
    return this.adapter.getBandDetails(bandId);
  }
}
