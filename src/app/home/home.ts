import { Component, signal } from '@angular/core';
import { Greeting } from "../components/greeting/greeting";

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
      welcome_message=signal('hello user welcome to our page');

      keyUpHandler(event:KeyboardEvent){
        console.log(`user pressed ${event.key}`);
      }

}
