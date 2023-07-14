import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-configuration',
  templateUrl: './github-configuration.component.html',
  styleUrls: ['./github-configuration.component.css'],
})
export class GithubConfigurationComponent implements OnInit {
  errorMessage: string;

  constructor() {
    this.errorMessage =
      "'NoneType' object has no attribute 'replace'";
  }

  ngOnInit(): void {}
}