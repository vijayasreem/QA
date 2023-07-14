import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  errorMessage: string = 'NoneType' object has no attribute 'replace'';

  constructor() { }

  ngOnInit(): void {
  }

}