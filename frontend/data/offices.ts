interface Office {
  id: number;
  city: string;
  address: string;
}

const offices: Office[] = [
  {
    id: 1,
    city: 'Bandung',
    address:
      'Komp. Buah Batu Regency A2 No.9 - 10 Kel. Kujangsari / Cijawura Kec. Bandung Kidul, Bandung, Jawa Barat, Indonesia.',
  },
  {
    id: 2,
    city: 'Jakarta',
    address:
      'Jl. Raya Pasar Minggu No. 39, RT. 001 / RW. 004, Pejaten Barat, Pasar Minggu, Jakarta Selatan, DKI Jakarta, Indonesia.',
  },
];

export default offices;
