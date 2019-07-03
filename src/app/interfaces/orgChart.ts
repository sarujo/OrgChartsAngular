interface Address {
  streetName: string;
  houseNumber: string;
  postalDistrict: string;
  postOfficeBox: string;
  county: string;
  cityName?: string;
}

export interface OwnerOf {
  externalCustomerKey: string;
  ownershipPercentage: string;
  votingRightsPercentage: string;
  role?: string;
  lastUpdated: string;
  ownershipType: string;
}

interface Owners {
  id: string;
  name?: string;
  externalCustomerKey?: string;
  customerType: string;
  country: string;
  address: Address;
  ownerOf: OwnerOf[];
}

interface Base {
  companyName: string;
  externalCustomerKey: string;
}

export interface OrgChartDTO {
  base: Base;
  owners: Owners[];
}
