import { Location, LocationResponse } from '#core/model/location.model';
import Axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

export const locationApi = {
  getLocations: async (page: number = 1): Promise<LocationResponse> => {
    const { data } = await Axios.get<LocationResponse>(
      `${baseURL}/location`,
      {
        params: { page },
      }
    );
    return data;
  },

  getLocationById: async (id: string): Promise<Location> => {
    const { data } = await Axios.get<Location>(`${baseURL}/location/${id}`);
    return data;
  },
};
