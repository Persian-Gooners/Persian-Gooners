export interface Immortal {
  id: string;
  nameEn: string;
  nameFa: string;
  photo: string;
  type: 'person' | 'mural';
  muralDescriptionEn?: string;
  muralDescriptionFa?: string;
}

export const immortals: Immortal[] = [
  {
    id: 'immortal-1',
    nameEn: 'Aref Jafarzadeh',
    nameFa: 'عارف جعفرزاده',
    photo: '/fans/aref-jafarzadeh.jpg',
    type: 'person',
  },
  {
    id: 'immortal-2',
    nameEn: 'Amirhossein Alvand',
    nameFa: 'امیرحسین الوند',
    photo: '/fans/amirhossein-alvand.jpg',
    type: 'person',
  },
  {
    id: 'immortal-3',
    nameEn: 'Alireza Seyedi',
    nameFa: 'علیرضا سیادی',
    photo: '/fans/alireza-seyedi.jpg',
    type: 'person',
  },
  {
    id: 'immortal-4',
    nameEn: 'Aref Jafarzadeh Mural',
    nameFa: 'نقاشی دیواری عارف جعفرزاده',
    photo: '/fans/aref-jafarzadeh-mural.jpg',
    type: 'mural',
    muralDescriptionEn: 'This artwork, created by @realnorthbanksy on Instagram, was unveiled in the Memory Tunnel opposite Emirates Stadium as a tribute and lasting symbol of remembrance.',
    muralDescriptionFa: '«این اثر توسط @realnorthbanksy در اینستاگرام خلق شده و در تونل خاطرات مقابل ورزشگاه امارات به عنوان نمادی ماندگار از یادبود و احترام به نمایش درآمده است.»',
  },
];
