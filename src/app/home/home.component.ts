import { Component, OnInit } from '@angular/core';
import { EtcdService } from '../utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
    private etcdService: EtcdService
  ) { }

  ngOnInit() {
  }

  OnGetEtcdInfo(): void {
    console.log("OnGetEtcdInfo");
    this.etcdService.Get().subscribe(
      data => console.log(data)
    );
  }

}
