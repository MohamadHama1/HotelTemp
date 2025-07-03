export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  maxGuests: number;
  bedType: string;
  amenities: string[];
  imageUrl: string;
  size: number;
  available: boolean;
}