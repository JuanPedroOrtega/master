import { Location, LocationResponse } from '#core/model/location.model';
import { LocationEntityVm, LocationCollectionVm } from './location-collection.vm';

export const mapLocationFromApiToVm = (location: Location): LocationEntityVm => ({
  id: location.id.toString(),
  name: location.name,
  type: location.type,
  dimension: location.dimension,
  residentCount: location.residents.length,
});

export const mapLocationCollectionFromApiToVm = (
  response: LocationResponse,
  currentPage: number
): LocationCollectionVm => ({
  locations: response.results.map(mapLocationFromApiToVm),
  info: {
    count: response.info.count,
    pages: response.info.pages,
    currentPage,
    hasNext: response.info.next !== null,
    hasPrev: response.info.prev !== null,
  },
});
