export interface LocationEntityVm {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residentCount: number;
}

export interface LocationCollectionVm {
  locations: LocationEntityVm[];
  info: {
    count: number;
    pages: number;
    currentPage: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
