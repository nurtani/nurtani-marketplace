export interface Seller {
  name: string;
  avatar: string;
}

export interface Product {
  id: number | string;
  image: string;
  isFavorite: boolean;
  isVerified: boolean;
  location: string;
  title: string;
  seller: Seller;
  points?: number;
  priceLabel: string;
  price: number;
}
