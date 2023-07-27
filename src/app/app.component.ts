import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Identite', url: '/identite', icon: 'Person' },
    { title: 'Survey forms', url: '/form', icon: 'help-circle' },
    { title: 'Take a picture', url: '/picture', icon: 'camera' },
    { title: 'Bible', url: '/bible', icon: 'book' },
    
  ];
  
  constructor() {}
}
