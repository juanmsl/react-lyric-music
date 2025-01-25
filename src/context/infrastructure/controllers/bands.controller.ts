import { BandsPort } from '@domain';

export class BandsController implements BandsPort {
  private adapter: BandsPort;

  constructor(adapter: BandsPort) {
    this.adapter = adapter;
  }

  getBands() {
    return this.adapter.getBands();
  }
}
