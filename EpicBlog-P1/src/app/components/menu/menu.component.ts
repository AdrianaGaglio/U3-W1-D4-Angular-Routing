import { Component } from '@angular/core';
import { iMenulink } from '../../interfaces/imenulink';

@Component({
  selector: '.app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  menuLinks: iMenulink[] = [
    {
      text: 'Home',
      url: '/',
    },
    {
      text: 'Active Posts',
      url: '/active-posts',
    },
    {
      text: 'Inactive Posts',
      url: '/inactive-posts',
    },
  ];
}
