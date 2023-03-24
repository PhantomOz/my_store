import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  ActiveLink: string = 'pl';

  handleClick(e: string): void {
    this.ActiveLink = e;
  }
}
