import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common-service/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor( private common: CommonService) { }

  ngOnInit(): void {
  }
  onLinkClick(linkName: string) {
    this.common.changeLinkName(linkName);
  }

}
