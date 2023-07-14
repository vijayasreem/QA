import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-configuration',
  template: `
    <h2>Github Configuration</h2>
    <p>{{error}}</p>
  `
})

export class GithubConfigurationComponent implements OnInit {
  error: string = `'NoneType' object has no attribute 'replace'`;

  constructor() { }

  ngOnInit(): void {
  }

}