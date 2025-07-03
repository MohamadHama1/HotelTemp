import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {
  allRooms: Room[] = [];
  filteredRooms: Room[] = [];
  
  filters = {
    maxPrice: 800,
    guests: 0,
    bedType: '',
    amenity: '',
    size: ''
  };

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.roomService.getRooms().subscribe(rooms => {
      this.allRooms = rooms;
      this.filteredRooms = rooms;
    });
  }

  applyFilters() {
    this.filteredRooms = this.allRooms.filter(room => {
      const priceMatch = room.price <= this.filters.maxPrice;
      const guestsMatch = this.filters.guests === 0 || room.maxGuests >= this.filters.guests;
      const bedTypeMatch = !this.filters.bedType || room.bedType.includes(this.filters.bedType);
      const amenityMatch = !this.filters.amenity || room.amenities.includes(this.filters.amenity);
      
      let sizeMatch = true;
      if (this.filters.size === 'small') {
        sizeMatch = room.size < 30;
      } else if (this.filters.size === 'medium') {
        sizeMatch = room.size >= 30 && room.size <= 50;
      } else if (this.filters.size === 'large') {
        sizeMatch = room.size > 50;
      }

      return priceMatch && guestsMatch && bedTypeMatch && amenityMatch && sizeMatch;
    });
  }

  clearFilters() {
    this.filters = {
      maxPrice: 800,
      guests: 0,
      bedType: '',
      amenity: '',
      size: ''
    };
    this.filteredRooms = this.allRooms;
  }
}