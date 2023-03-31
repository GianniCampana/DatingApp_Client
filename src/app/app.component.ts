import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//si deve implementare l'interfaccia OnInit e creare il costruttore
//nella classe per poter fare la chiamata http
export class AppComponent implements OnInit{
  title = 'Dating app';
  users: any;
  constructor(private http: HttpClient){}

  //nell'ngOnInit() si inseriscono le chiamate che si fanno nel componente, dentro
  ngOnInit(): void {
    this.http.get("https://localhost:5001/api/users").subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log("Request has completed")
    })
  }
}
