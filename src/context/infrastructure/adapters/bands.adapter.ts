import axios from 'axios';

import { Band, BandDetails, BandsPort } from '@domain';

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

  async getBandDetails(bandId: string) {
    const bands = await axios.get<BandDetails>(`/mock_data/${bandId}.json`, {
      responseType: 'json',
    });

    if (typeof bands.data !== 'object') {
      throw new Error('Band details data could not be loaded');
    }

    return bands.data;
  }
}
