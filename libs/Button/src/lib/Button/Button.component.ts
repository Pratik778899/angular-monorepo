import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = 'Default Label';
  @Input() style: { [Class: string]: any } = {};
  @Output() buttonClick = new EventEmitter<any>();

  handleClick(event: any): void {
    this.buttonClick.emit(event);
  }
}
