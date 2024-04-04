import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'


})
export class AppComponent {
  
  password = ""

  onButtonClick(){
    this.password = "My Password"
    console.log("Button was clicked")
  }

  getPassword(){
    return this.password
  }

}
