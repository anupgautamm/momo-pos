import { NextResponse } from "next/server";

export const FeaturesData: {
  imgSrc: string;
  heading: string;
  subheading: string;
}[] = [
    {
      imgSrc: '/img/logo.png',
      heading: "Menu variations",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
    },
    {
      imgSrc: '/img/logo.png',
      heading: "Cooking warw",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
    },
    {
      imgSrc: '/img/logo.png',
      heading: "Best chef",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
    },
    {
      imgSrc: '/img/logo.png',
      heading: "Fast food",
      subheading: "Sed ut perspiciatis unde omnis iste natus error",
    }

  ]

export const ExpertData: {
  profession: string;
  name: string;
  imgSrc: string;
}[] = [
    {
      profession: 'Senior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/boyone.svg',
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/girl.png',
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/boytwo.svg',
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/girl.png',
    },
    {
      profession: 'Senior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/boyone.svg',
    },
    {
      profession: 'Junior Chef',
      name: 'Shoo Thar Mien',
      imgSrc: '/images/Expert/boytwo.svg',
    },
  ]

export const galleryImages = [
  { src: '/img/raw.jpeg', name: 'Frozen Momo', price: 35 },
  { src: '/img/Steam.jpeg', name: 'Steam Momo', price: 17 },
  { src: '/img/package.jpeg', name: 'Frozen Chicken momo in package', price: 35 },
  { src: '/img/momodip.jpeg', name: 'Ready to eat with pickle', price: 20 },
];


export const products = [
  {
    id: 1,
    name: "Frozen Chicken Momo",
    description: "Delicious chicken momo packed and ready to cook.",
    price: 35,
    oldPrice: 40,
    imgSrc: "/img/package.jpeg",
    category: "Frozen",
  },
  {
    id: 2,
    name: "Frozen Buff Momo",
    description: "Fresh buff momo frozen and sealed for long storage.",
    price: 32,
    imgSrc: "/img/raw.jpeg",
    category: "Frozen",
  },
  {
    id: 3,
    name: "Steam Chicken Momo",
    description: "Freshly steamed chicken momo ready to eat.",
    price: 17,
    oldPrice: 40,
    imgSrc: "/img/Steam.jpeg",
    category: "Steam",
  },
  {
    id: 4,
    name: "Ready Momo with Dip",
    description: "Hot momo served with spicy momo achar.",
    price: 20,
    oldPrice: 40,
    imgSrc: "/img/momodip.jpeg",
    category: "Ready to Eat",
  },
  {
    id: 5,
    name: "Frozen Chicken Momo",
    description: "Delicious chicken momo packed and ready to cook.",
    price: 35,
    imgSrc: "/img/package.jpeg",
    category: "Frozen",
  },
  {
    id: 6,
    name: "Frozen Buff Momo",
    description: "Fresh buff momo frozen and sealed for long storage.",
    price: 32,
    oldPrice: 40,
    imgSrc: "/img/raw.jpeg",
    category: "Frozen",
  },
  {
    id: 7,
    name: "Steam Chicken Momo",
    description: "Freshly steamed chicken momo ready to eat.",
    price: 17,
    imgSrc: "/img/Steam.jpeg",
    category: "Steam",
  },
  {
    id: 8,
    name: "Ready Momo with Dip",
    description: "Hot momo served with spicy momo achar.",
    price: 20,
    imgSrc: "/img/momodip.jpeg",
    category: "Ready to Eat",
  },
];
