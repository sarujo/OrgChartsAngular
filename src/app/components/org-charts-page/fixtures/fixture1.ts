import { OrgChartDTO } from 'src/app/interfaces/orgChart';

export const orgData: OrgChartDTO = {
  base: {
    companyName: 'AHOC A/S',
    externalCustomerKey: '24212726',
  },
  owners: [
    {
      // ID NEEDS TO BE ADDED
      id: '1',
      name: 'Carsten SixhÃ¸i',
      customerType: 'Personal',
      country: 'DK',
      address: {
        streetName: 'VenÃ¸vÃ¦nget',
        houseNumber: '6',
        postalDistrict: 'Kolding',
        postOfficeBox: '6000',
        county: 'DK',
      },
      ownerOf: [
        {
          externalCustomerKey: '24212726',
          ownershipPercentage: '40.73',
          votingRightsPercentage: '40.73',
          role: 'The board of directors',
          lastUpdated: '2018-11-13',
          ownershipType: 'BENEFICIAL_OWNER',
        },
      ],
    },
    {
      id: '2',
      name: 'Benthe Andersen',
      customerType: 'Personal',
      country: 'DK',
      address: {
        streetName: 'SÃ¸nderskovgÃ¥rdvej',
        houseNumber: '7',
        cityName: 'SÃ¸nderskov',
        postalDistrict: 'BrÃ¸rup',
        postOfficeBox: '6650',
        county: 'DK',
      },
      ownerOf: [
        {
          externalCustomerKey: '24212726',
          ownershipPercentage: '31.029999',
          votingRightsPercentage: '31.029999',
          role: 'The board of directors',
          lastUpdated: '2018-11-13',
          ownershipType: 'BENEFICIAL_OWNER',
        },
      ],
    },
    {
      id: '3',
      externalCustomerKey: '40008195',
      name: 'People-IT Holding ApS',
      customerType: 'Business',
      country: 'DK',
      address: {
        streetName: 'Birkemosevej',
        houseNumber: '7',
        cityName: 'Nr Bjert',
        postalDistrict: 'Kolding',
        postOfficeBox: '6000',
        county: 'DK',
      },
      ownerOf: [
        {
          externalCustomerKey: '24212726',
          ownershipPercentage: '100',
          votingRightsPercentage: '100',
          lastUpdated: '2018-11-13',
          ownershipType: 'DIRECT_OWNER',
        },
      ],
    },
    {
      id: '4',
      externalCustomerKey: '45558195',
      name: 'People-IT Holding ApS 2',
      customerType: 'Business',
      country: 'DK',
      address: {
        streetName: 'Birkemosevej',
        houseNumber: '7',
        cityName: 'Nr Bjert',
        postalDistrict: 'Kolding',
        postOfficeBox: '6000',
        county: 'DK',
      },
      ownerOf: [
        {
          externalCustomerKey: '40008195',
          ownershipPercentage: '50',
          votingRightsPercentage: '50',
          lastUpdated: '2018-11-13',
          ownershipType: 'DIRECT_OWNER',
        },
      ],
    },
    {
      id: '5',
      externalCustomerKey: '46668195',
      name: 'People-IT Holding ApS 3',
      customerType: 'Business',
      country: 'DK',
      address: {
        streetName: 'Birkemosevej',
        houseNumber: '7',
        cityName: 'Nr Bjert',
        postalDistrict: 'Kolding',
        postOfficeBox: '6000',
        county: 'DK',
      },
      ownerOf: [
        {
          externalCustomerKey: '40008195',
          ownershipPercentage: '50',
          votingRightsPercentage: '50',
          lastUpdated: '2018-11-13',
          ownershipType: 'DIRECT_OWNER',
        },
        {
          externalCustomerKey: '24212726',
          ownershipPercentage: '10',
          votingRightsPercentage: '10',
          lastUpdated: '2018-11-13',
          ownershipType: 'SHARED_OWNER',
        },
      ],
    },
  ],
};
