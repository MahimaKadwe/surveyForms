import { Component, OnInit} from '@angular/core';

@Component({
  selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent   {
  title = 'angular project';
  public name = "shruti";
  public siteurl = window.location.href;
  public myId = "test ID";
  public hasError = false;

  public messages = {
  "test-danger" : this.hasError,
  }
}
 
