import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  featuredRooms: Room[] = [];

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.roomService.getRooms().subscribe(rooms => {
      this.featuredRooms = rooms.slice(0, 3);
    });
  }
}
