import { OrgChartDTO } from 'src/app/interfaces/orgChart';

export const orgData: OrgChartDTO = {
  base: {
    id: '66',
    companyName: 'AHOC A/S',
    externalCustomerKey: '24212726',
  },
  owners: [
    {
      id: '55',
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
          externalCustomerKey: '24212726',
          ownershipPercentage: '10',
          votingRightsPercentage: '10',
          lastUpdated: '2018-11-13',
          ownershipType: 'SHARED_OWNER',
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
        // {
        //   externalCustomerKey: '24212726',
        //   ownershipPercentage: '10',
        //   votingRightsPercentage: '10',
        //   lastUpdated: '2018-11-13',
        //   ownershipType: 'SHARED_OWNER',
        // },
      ],
    },
  ],
};
