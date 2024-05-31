import { Component, OnInit } from '@angular/core';
import { io } from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'lazy-load-demo';

  temperatura!: string;

  socket = io("http://localhost:3333");
  ngOnInit(): void {
    this.testeValores()
  }

  // testSocket(){
  //   this.socket.on("connect", () => {
  //     console.log(this.socket.id); // x8WIv7-mJelg7on_ALbx
  //   });
  // }

  testeValores(){
    this.socket.on("valores", message => {
      // console.log(message);
      return this.temperatura = message;
    })
  }

  mandarMsg(){
    this.socket.emit("front", `teste de envio: ${Math.random()}`)
  }
}
