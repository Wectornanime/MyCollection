import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCalendarOutline, ionPeopleOutline, ionGameControllerOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ionCalendarOutline, ionPeopleOutline, ionGameControllerOutline})],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input() content!: string;
  @Input() iconName!: string;

}
