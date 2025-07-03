import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';
import { BookingForm } from '../../models/booking.model';
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent  implements OnInit {
  room: Room | undefined;
  bookingConfirmed = false;
  totalCost = 0;
  numberOfNights = 0;
  taxesAndFees = 0;
  minDate = new Date().toISOString().split('T')[0];

  booking: BookingForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequests: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService
  ) {}

  ngOnInit() {
    const roomId = this.route.snapshot.paramMap.get('roomId');
    if (roomId) {
      this.roomService.getRoomById(roomId).subscribe(room => {
        this.room = room;
      });
    }
  }

  calculateTotal() {
    if (this.booking.checkIn && this.booking.checkOut && this.room) {
      const checkIn = new Date(this.booking.checkIn);
      const checkOut = new Date(this.booking.checkOut);
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      this.numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      if (this.numberOfNights > 0) {
        this.totalCost = this.numberOfNights * this.room.price;
        this.taxesAndFees = Math.round(this.totalCost * 0.15); // 15% taxes and fees
      } else {
        this.totalCost = 0;
        this.taxesAndFees = 0;
      }
    }
  }

  submitBooking(form: any) {
    if (form.valid) {
      // Simulate booking process
      setTimeout(() => {
        this.bookingConfirmed = true;
      }, 1000);
    }
  }

  goHome() {
    this.router.navigate(['/']);
  }

  bookAnother() {
    this.router.navigate(['/rooms']);
  }
}
