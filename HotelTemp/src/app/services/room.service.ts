import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private rooms: Room[] = [
    {
      id: '1',
      name: 'Deluxe Suite',
      description: 'Spacious suite with ocean view, king bed, and luxury amenities',
      price: 299,
      maxGuests: 2,
      bedType: 'King',
      amenities: ['Ocean View', 'Mini Bar', 'Balcony', 'WiFi', 'Room Service'],
      imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500&h=300&fit=crop',
      size: 50,
      available: true
    },
    {
      id: '2',
      name: 'Family Room',
      description: 'Perfect for families with two queen beds and connecting space',
      price: 199,
      maxGuests: 4,
      bedType: 'Two Queens',
      amenities: ['City View', 'WiFi', 'Mini Fridge', 'Coffee Maker'],
      imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop',
      size: 35,
      available: true
    },
    {
      id: '3',
      name: 'Presidential Suite',
      description: 'Ultimate luxury with panoramic views and premium services',
      price: 599,
      maxGuests: 4,
      bedType: 'King + Sofa Bed',
      amenities: ['Panoramic View', 'Jacuzzi', 'Butler Service', 'Private Terrace', 'Premium Bar'],
      imageUrl: 'https://img.grandlisboa.com/assets/gl-presidential-suite-highlight-dt.jpg',
      size: 80,
      available: true
    },
    {
      id: '4',
      name: 'Standard Room',
      description: 'Comfortable room with essential amenities at great value',
      price: 129,
      maxGuests: 2,
      bedType: 'Queen',
      amenities: ['WiFi', 'TV', 'Air Conditioning', 'Private Bathroom'],
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop',
      size: 25,
      available: true
    },
    {
      id: '5',
      name: 'Business Suite',
      description: 'Designed for business travelers with work space and meeting area',
      price: 249,
      maxGuests: 2,
      bedType: 'King',
      amenities: ['Work Desk', 'High-Speed WiFi', 'Printer', 'Coffee Station', 'City View'],
      imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&h=300&fit=crop',
      size: 40,
      available: true
    },
    {
      id: '6',
      name: 'Ocean View Premium',
      description: 'Stunning ocean views with modern amenities and premium comfort',
      price: 349,
      maxGuests: 2,
      bedType: 'King',
      amenities: ['Ocean View', 'Balcony', 'Jacuzzi', 'Mini Bar', 'Room Service', 'WiFi'],
      imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop',
      size: 45,
      available: true
    },
    {
      id: '7',
      name: 'Garden Suite',
      description: 'Peaceful garden setting with private patio and nature views',
      price: 279,
      maxGuests: 3,
      bedType: 'Queen',
      amenities: ['Garden View', 'Private Patio', 'Mini Bar', 'WiFi', 'Coffee Maker'],
      imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=300&fit=crop',
      size: 42,
      available: true
    },
    {
      id: '8',
      name: 'Executive Floor Room',
      description: 'High-floor accommodation with executive lounge access',
      price: 319,
      maxGuests: 2,
      bedType: 'King',
      amenities: ['City View', 'Executive Lounge', 'Work Desk', 'WiFi', 'Complimentary Breakfast'],
      imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=500&h=300&fit=crop',
      size: 38,
      available: true
    },
    {
      id: '9',
      name: 'Penthouse Suite',
      description: 'Top-floor luxury with 360-degree city views and premium services',
      price: 799,
      maxGuests: 4,
      bedType: 'King + Sofa Bed',
      amenities: ['Panoramic View', 'Private Terrace', 'Jacuzzi', 'Butler Service', 'Premium Bar', 'Private Elevator'],
      imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop',
      size: 95,
      available: true
    },
    {
      id: '10',
      name: 'Romantic Getaway',
      description: 'Intimate setting perfect for couples with romantic amenities',
      price: 389,
      maxGuests: 2,
      bedType: 'King',
      amenities: ['Ocean View', 'Balcony', 'Jacuzzi', 'Champagne Service', 'Rose Petals', 'Mini Bar'],
      imageUrl: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=500&h=300&fit=crop',
      size: 48,
      available: true
    },
    {
      id: '11',
      name: 'Accessible Comfort Room',
      description: 'Fully accessible room with modern amenities and comfort features',
      price: 179,
      maxGuests: 2,
      bedType: 'Queen',
      amenities: ['Wheelchair Accessible', 'Roll-in Shower', 'WiFi', 'Mini Fridge', 'Grab Bars'],
      imageUrl: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=500&h=300&fit=crop',
      size: 32,
      available: true
    },
    {
      id: '12',
      name: 'Spa Wellness Suite',
      description: 'Relaxation focused room with spa amenities and wellness features',
      price: 429,
      maxGuests: 2,
      bedType: 'King',
      amenities: ['Spa Bath', 'Meditation Corner', 'Aromatherapy', 'Yoga Mat', 'Healthy Minibar', 'Garden View'],
      imageUrl: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=300&fit=crop',
      size: 55,
      available: true
    },
    {
      id: '13',
      name: 'Tech-Savvy Suite',
      description: 'Modern suite with latest technology and smart home features',
      price: 359,
      maxGuests: 2,
      bedType: 'King',
      amenities: ['Smart TV', 'Voice Control', 'Wireless Charging', 'High-Speed WiFi', 'Gaming Console', 'Work Desk'],
      imageUrl: 'https://www.hestabit.com/blog/wp-content/uploads/2020/12/7-copy.png',
      size: 44,
      available: true
    },
    {
      id: '14',
      name: 'Classic Elegance Room',
      description: 'Timeless design with classic furnishings and traditional comfort',
      price: 219,
      maxGuests: 2,
      bedType: 'Queen',
      amenities: ['Classic Décor', 'Antique Furnishings', 'City View', 'WiFi', 'Mini Bar', 'Concierge Service'],
      imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&h=300&fit=crop',
      size: 36,
      available: true
    }
  ];

  getRooms(): Observable<Room[]> {
    return of(this.rooms);
  }

  getRoomById(id: string): Observable<Room | undefined> {
    return of(this.rooms.find(room => room.id === id));
  }
}