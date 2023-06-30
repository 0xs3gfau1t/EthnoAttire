const districts = [
    {
        Province: 'PROVINCE 1',
        District: 'Taplejung',
        'District code': 101,
        X: 87.7763,
        Y: '27.6257',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Sankhuwasabha',
        'District code': 102,
        X: 87.1423,
        Y: '27.6142',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Solukhumbu',
        'District code': 103,
        X: 86.6611,
        Y: '27.791',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Okhaldhunga',
        'District code': 104,
        X: 86.5047,
        Y: '27.324',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Khotang',
        'District code': 105,
        X: 86.822,
        Y: '27.2317',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Bhojpur',
        'District code': 106,
        X: 87.0524,
        Y: '27.178',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Dhankuta',
        'District code': 107,
        X: 87.3215,
        Y: '26.9835',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Terhathum',
        'District code': 108,
        X: 87.5377,
        Y: '27.1508',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Panchthar',
        'District code': 109,
        X: 87.7781,
        Y: '27.1044',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Ilam',
        'District code': 110,
        X: 87.9335,
        Y: '26.875999999999998',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Jhapa',
        'District code': 111,
        X: 87.8942,
        Y: '26.6398',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Morang',
        'District code': 112,
        X: 87.4604,
        Y: '26.6799',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Sunsari',
        'District code': 113,
        X: 87.1822,
        Y: '26.6276',
    },
    {
        Province: 'PROVINCE 1',
        District: 'Udayapur',
        'District code': 114,
        X: 86.7014,
        Y: '26.8998',
    },
    {
        Province: 'PROVINCE 2',
        District: 'Saptari',
        'District code': 201,
        X: 86.7014,
        Y: '26.6173',
    },
    {
        Province: 'PROVINCE 2',
        District: 'Siraha',
        'District code': 202,
        X: 86.3525,
        Y: '26.7333',
    },
    {
        Province: 'PROVINCE 2',
        District: 'Dhanusa',
        'District code': 203,
        X: 86.0122,
        Y: '26.835',
    },
    {
        Province: 'PROVINCE 2',
        District: 'Mahottari',
        'District code': 204,
        X: 85.8077,
        Y: '26.8762',
    },
    {
        Province: 'PROVINCE 2',
        District: 'Sarlahi',
        'District code': 205,
        X: 85.5612,
        Y: '26.9627',
    },
    {
        Province: 'PROVINCE 2',
        District: 'Rautahat',
        'District code': 206,
        X: 85.3136,
        Y: '27.0487',
    },
    {
        Province: 'PROVINCE 2',
        District: 'Bara',
        'District code': 207,
        X: 85.0649,
        Y: '27.1341',
    },
    {
        Province: 'PROVINCE 2',
        District: 'Parsa',
        'District code': 208,
        X: 84.8568,
        Y: '27.1736',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Dolakha',
        'District code': 301,
        X: 86.1752,
        Y: '27.7784',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Sindhupalchok',
        'District code': 302,
        X: 85.6846,
        Y: '27.9512',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Rasuwa',
        'District code': 303,
        X: 85.3136,
        Y: '28.1727',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Dhading',
        'District code': 304,
        X: 84.8985,
        Y: '27.9711',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Nuwakot',
        'District code': 305,
        X: 85.1661,
        Y: '27.9194',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Kathmandu',
        'District code': 306,
        X: 85.324,
        Y: '27.7172',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Bhaktapur',
        'District code': 307,
        X: 85.4298,
        Y: '27.671',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Lalitpur',
        'District code': 308,
        X: 85.3225,
        Y: '27.658',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Kavrepalanchok',
        'District code': 309,
        X: 85.5612,
        Y: '27.5259',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Ramechhap',
        'District code': 310,
        X: 86.1345,
        Y: '27.3554',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Sindhuli',
        'District code': 311,
        X: 85.9713,
        Y: '27.2569',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Makwanpur',
        'District code': 312,
        X: 85.0233,
        Y: '27.5546',
    },
    {
        Province: 'PROVINCE 3',
        District: 'Chitwan',
        'District code': 313,
        X: 84.3542,
        Y: '27.5291',
    },
    {
        Province: 'GANDAKI',
        District: 'Gorkha',
        'District code': 401,
        X: 84.7925,
        Y: '28.2512',
    },
    {
        Province: 'GANDAKI',
        District: 'Manang',
        'District code': 402,
        X: 84.2308,
        Y: '28.6918',
    },
    {
        Province: 'GANDAKI',
        District: 'Mustang',
        'District code': 403,
        X: 83.8473,
        Y: '28.9985',
    },
    {
        Province: 'GANDAKI',
        District: 'Myagdi',
        'District code': 404,
        X: 83.3362,
        Y: '28.6029',
    },
    {
        Province: 'GANDAKI',
        District: 'Kaski',
        'District code': 405,
        X: 84.0167,
        Y: '28.2622',
    },
    {
        Province: 'GANDAKI',
        District: 'Lamjung',
        'District code': 406,
        X: 84.3542,
        Y: '28.2765',
    },
    {
        Province: 'GANDAKI',
        District: 'Tanahun',
        'District code': 407,
        X: 84.2279,
        Y: '27.9447',
    },
    {
        Province: 'GANDAKI',
        District: 'Nawalpur',
        'District code': 408,
        X: 84.0331,
        Y: '27.6568',
    },
    {
        Province: 'GANDAKI',
        District: 'Syangja',
        'District code': 409,
        X: 83.8049,
        Y: '28.0197',
    },
    {
        Province: 'GANDAKI',
        District: 'Parbat',
        'District code': 410,
        X: 83.6987,
        Y: '28.178',
    },
    {
        Province: 'GANDAKI',
        District: 'Baglung',
        'District code': 411,
        X: 83.2201,
        Y: '28.3491',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Eastern Rukum',
        'District code': 501,
        X: 82.8548,
        Y: '28.6641',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Rolpa',
        'District code': 502,
        X: 82.6483,
        Y: '28.3816',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Pyuthan',
        'District code': 503,
        X: 82.8533,
        Y: '28.1017',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Gulmi',
        'District code': 504,
        X: 83.2934,
        Y: '28.0889',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Arghakhanchi',
        'District code': 505,
        X: 83.0361,
        Y: '27.9829',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Palpa',
        'District code': 506,
        X: 83.6348,
        Y: '27.8253',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Parasi',
        'District code': 507,
        X: 83.6665,
        Y: '27.5328',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Rupandehi',
        'District code': 508,
        X: 83.4463,
        Y: '27.5924',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Kapilbastu',
        'District code': 509,
        X: 83.0469,
        Y: '27.5518',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Dang',
        'District code': 510,
        X: 82.3018,
        Y: '27.9904',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Banke',
        'District code': 511,
        X: 81.7787,
        Y: '28.1461',
    },
    {
        Province: 'PROVINCE 5',
        District: 'Bardiya',
        'District code': 512,
        X: 81.4279,
        Y: '28.3102',
    },
    {
        Province: 'KARNALI',
        District: 'Dolpa',
        'District code': 601,
        X: 83.0791,
        Y: '29.0539',
    },
    {
        Province: 'KARNALI',
        District: 'Mugu',
        'District code': 602,
        X: 82.3466,
        Y: '29.6141',
    },
    {
        Province: 'KARNALI',
        District: 'Humla',
        'District code': 603,
        X: 81.9535,
        Y: '30.0052',
    },
    {
        Province: 'KARNALI',
        District: 'Jumla',
        'District code': 604,
        X: 82.1278,
        Y: '29.2788',
    },
    {
        Province: 'KARNALI',
        District: 'Kalikot',
        'District code': 605,
        X: 81.7349,
        Y: '29.2089',
    },
    {
        Province: 'KARNALI',
        District: 'Dailekh',
        'District code': 606,
        X: 81.6473,
        Y: '28.9262',
    },
    {
        Province: 'KARNALI',
        District: 'Jajarkot',
        'District code': 607,
        X: 82.1558,
        Y: '28.8615',
    },
    {
        Province: 'KARNALI',
        District: 'Western Rukum',
        'District code': 608,
        X: 82.4359,
        Y: '28.7436',
    },
    {
        Province: 'KARNALI',
        District: 'Salyan',
        'District code': 609,
        X: 82.1278,
        Y: '28.3525',
    },
    {
        Province: 'KARNALI',
        District: 'Surkhet',
        'District code': 610,
        X: 81.7787,
        Y: '28.5175',
    },
    {
        Province: 'SUDURPASHCHIM',
        District: 'Bajura',
        'District code': 701,
        X: 81.6035,
        Y: '29.6155',
    },
    {
        Province: 'SUDURPASHCHIM',
        District: 'Bajhang',
        'District code': 702,
        X: 81.2519,
        Y: '29.7767',
    },
    {
        Province: 'SUDURPASHCHIM',
        District: 'Darchula',
        'District code': 703,
        X: 80.7948,
        Y: '29.9038',
    },
    {
        Province: 'SUDURPASHCHIM',
        District: 'Baitadi',
        'District code': 704,
        X: 80.4688,
        Y: '29.5186',
    },
    {
        Province: 'SUDURPASHCHIM',
        District: 'Dadeldhura',
        'District code': 705,
        X: 80.4994,
        Y: '29.2188',
    },
    {
        Province: 'SUDURPASHCHIM',
        District: 'Doti',
        'District code': 706,
        X: 80.8987,
        Y: '29.2006',
    },
    {
        Province: 'SUDURPASHCHIM',
        District: 'Achham',
        'District code': 707,
        X: 81.2519,
        Y: '29.0396',
    },
    {
        Province: 'SUDURPASHCHIM',
        District: 'Kailali',
        'District code': 708,
        X: 80.8092,
        Y: '28.7413',
    },
    {
        Province: 'SUDURPASHCHIM',
        District: 'Kanchanpur',
        'District code': 709,
        X: 80.3213,
        Y: '28.8372',
    },
]

export { districts }