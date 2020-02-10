import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Is a service

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string; // Variable to be used as Title for each component

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe( (result) => { // Suscription to the Observable Route
      this.title = result.title
      console.log("init");

    });


  }

}
