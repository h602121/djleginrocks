import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Simple variable to toggle the page view
  currentView: string = 'home';

  // Method to change view
  navigate(view: string) {
    this.currentView = view;
  }
}
