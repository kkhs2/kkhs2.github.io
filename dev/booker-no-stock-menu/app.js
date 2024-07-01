

const branches = [
  {
    id: 503,
    name: 'Kettering',
    distance: 20.92,
    isOpened: true,
    open: 'Monday 8:30AM',
    close: '3:00PM',
    lat: 52.4090884,
    lon: -0.7196247
  },
{
id: 266,
name: 'Northampton',
distance: 30.13,
isOpened: false,
open: 'Monday 10:00AM',
close: '4:00PM',
lat: 52.2481206,
lon: -1.1024259
},
{
id: 316,
name: 'Peterborough',
distance: 2.51,
isOpened: true,
open: 'Tuesday 9:00AM',
close: '5:00PM',
lat: 52.5548845,
lon: -0.2641662
},
{
id: 329,
name: 'Luton',
distance: 25.00,
isOpened: true,
open: 'Monday 9:00AM',
close: '6:00PM',
lat: 51.9220378,
lon: -1.6340446
},
{
id: 533,
name: 'Bedford',
distance: 26.52,
isOpened: false,
open: 'Monday 7:45AM',
close: '7:00PM',
lat: 52.1487477,
lon: -0.4228694
},
{
id: 533,
name: 'Cambridge',
distance: 28.53,
isOpened: true,
open: 'Monday 7:45AM',
close: '2:00PM',
lat: 52.1958316,
lon: 0.164765
},
{
id: 144,
name: 'Great Yarmouth',
distance: 123.00,
isOpened: true,
open: 'Monday 7:45AM',
close: '2:00PM',
lat: 52.6111495,
lon: 1.7131574
},
{
  id: 305,
  name: 'Rugby',
  distance: 123.00,
  isOpened: true,
  open: 'Monday 7:45AM',
  close: '2:00PM',
  lat: 52.3735393,
  lon: -1.2856324
  },
  {
    id: 191,
    name: 'Warwick',
    distance: 123.00,
    isOpened: true,
    open: 'Monday 7:45AM',
    close: '2:00PM',
    lat: 52.2894239,
    lon: -1.59197
    },
    {
      id: 302,
      name: 'Coventry',
      distance: 123.00,
      isOpened: true,
      open: 'Monday 7:45AM',
      close: '2:00PM',
      lat: 52.4087804,
      lon: -1.5005229
      },
      {
        id: 331,
        name: 'Nuneaton',
        distance: 123.00,
        isOpened: true,
        open: 'Monday 7:45AM',
        close: '2:00PM',
        lat: 52.5041024,
        lon: -1.4765309
        },
        {
          id: 337,
          name: 'Birmingham Stirchley',
          distance: 123.00,
          isOpened: true,
          open: 'Monday 7:45AM',
          close: '2:00PM',
          lat: 52.4342477,
          lon: -1.9190637
        },
        {
          id: 380,
          name: 'Wolverhampton',
          distance: 123.00,
          isOpened: true,
          open: 'Monday 7:45AM',
          close: '2:00PM',
          lat: 52.56988,
          lon: -2.1053074
        },
        {
          id: 190,
          name: 'Tamworth',
          distance: 123.00,
          isOpened: true,
          open: 'Monday 7:45AM',
          close: '2:00PM',
          lat: 52.6386645,
          lon: -1.7083861
        },
        {
          id: 354,
          name: 'Saltley',
          distance: 123.00,
          isOpened: true,
          open: 'Monday 7:45AM',
          close: '2:00PM',
          lat: 52.4913606,
          lon: -1.863292
        },

];

const products = [
{
  midascode: 286632,
  description: 'Just Cookit BBQ Pork Rack of Ribs 450g',
  volume: 'Case of 12',
  price: 59.88,
  type: 'Chilled',
  stock: [
    {
      id: 316,
      quantity: 50
    },
    {
      id: 329,
      quantity: 20
    },
    {
      id: 503,
      quantity: 3
    },
    {
      id: 266,
      quantity: 100
    },
    {
      id: 533,
      quantity: 0
    }
  ]
},
{
  midascode: 249725,
  description: 'Heineken 12 x 330ml',
  volume: 'Case of 1',
  price: 9.99,
  type: 'Ambient',
  stock: [
    {
      id: 316,
      quantity: 24
    },
    {
      id: 329,
      quantity: 55
    },
    {
      id: 503,
      quantity: 4
    },
    {
      id: 266,
      quantity: 0
    },
    {
      id: 533,
      quantity: 33
    }
  ]
},
{
  midascode: 126911,
  description: 'Cravendale Semi Skimmed 2L',
  volume: 'Case of 6',
  price: 12.09,
  type: 'Chilled',
  stock: [
    {
      id: 316,
      quantity: 0
    },
    {
      id: 329,
      quantity: 0
    },
    {
      id: 503,
      quantity: 2
    },
    {
      id: 266,
      quantity: 33
    },
    {
      id: 533,
      quantity: 1
    }
  ]
},
{
  midascode: 244174,
  description: 'Cornetto Ice Cream Cone Classico 120 ml',
  volume: 'Case of 24',
  price: 22.29,
  type: 'Frozen',
  stock: [
    {
      id: 316,
      quantity: 4
    },
    {
      id: 329,
      quantity: 0
    },
    {
      id: 503,
      quantity: 33
    },
    {
      id: 266,
      quantity: 0
    },
    {
      id: 533,
      quantity: 55
    }
  ]
},
{
  midascode: 260506,
  description: 'HARIBO Goldbears 160g',
  volume: 'Case of 12',
  price: 12.15,
  type: 'Ambient',
  stock: [
    {
      id: 316,
      quantity: 22
    },
    {
      id: 329,
      quantity: 22
    },
    {
      id: 503,
      quantity: 2
    },
    {
      id: 266,
      quantity: 28
    },
    {
      id: 533,
      quantity: 44
    }
  ]
},
{
  midascode: 218322,
  description: '19 Crimes Red Wine 750ml',
  volume: 'Case of 6',
  price: 37.49,
  type: 'Ambient',
  stock: [
    {
      id: 316,
      quantity: 9
    },
    {
      id: 329,
      quantity: 100
    },
    {
      id: 503,
      quantity: 200
    },
    {
      id: 266,
      quantity: 2
    },
    {
      id: 533,
      quantity: 4
    }
  ]
},
{
  midascode: 332071,
  description: 'Blakemans Supreme Sausage Thick Pork 2kg',
  volume: 'Case of 4',
  price: 35.96,
  type: 'Chilled',
  stock: [
    {
      id: 316,
      quantity: 4
    },
    {
      id: 329,
      quantity: 69
    },
    {
      id: 503,
      quantity: 20
    },
    {
      id: 266,
      quantity: 3
    },
    {
      id: 533,
      quantity: 4
    }
  ]
}
];

const filters = [
{
  status: 'In Stock'
},
{
  status: 'Low Stock',
},
{
  status: 'Out of Stock'
},
{
  status: 'Open'
},
{
  status: 'Closed'
},
{
  status: 'Retail'
},
{
  status: 'Catering'
}
];


branches.sort((a, b) => a.distance - b.distance);

let noStockMenuContainer = document.getElementById('rts-no-stock-menu');

noStockMenuContainer.setAttribute('data-products', JSON.stringify(products));
noStockMenuContainer.setAttribute('data-branches', JSON.stringify(branches));