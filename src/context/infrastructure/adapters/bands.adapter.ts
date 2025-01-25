import axios from 'axios';

import { Band, BandsPort } from '@domain';

export class BandsAdapter implements BandsPort {
  async getBands() {
    const bands = await axios.get<Array<Band>>('/mock_data/bands.json', {
      responseType: 'json',
    });

    if (typeof bands.data !== 'object') {
      throw new Error('Bands data could not be loaded');
    }

    return bands.data;
  }
}
