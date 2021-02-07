import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {
  @Input() draw: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
