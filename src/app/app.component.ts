import { Component, OnInit } from '@angular/core';
import { NotificationService } from './shared/service/notification.service';
@Component( {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent implements OnInit {
  title = 'exercise';
  constructor ( private notifyService: NotificationService ) { }

  ngOnInit() {
  }

  showToaster() {
    // this.notifyService.showSuccess( "Data shown successfully !!", "Notification" );
  }
}
