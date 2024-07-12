import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common-service/common.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  header_title: string;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.common.currentLinkName.subscribe(name => this.header_title = name);
  }

}
