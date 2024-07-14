import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule , CardModule ,ButtonModule],
  templateUrl: './Card.component.html',
  styleUrl: './Card.component.css',
})
export class CardComponent {
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() imageUrl: string = '';
  @Input() buttonText1: string = '';
  @Input() price: string = '';
}
