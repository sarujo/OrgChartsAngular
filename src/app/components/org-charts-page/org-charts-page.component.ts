import { Component, OnInit, OnDestroy } from '@angular/core';
import { orgData } from './fixtures/fixture1';
import { MsgService } from '../../msgservice';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-org-charts-page',
  templateUrl: './org-charts-page.component.html',
  styleUrls: ['./org-charts-page.component.scss'],
})
export class OrgChartsPageComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  orgDataInputed = orgData;
  selected: string;

  constructor(private messageService: MsgService) {
    // subscribe to sibling component messages
    this.subscription = this.messageService.getMessage().subscribe(data => {
      if (data) {
        this.orgDataInputed = Object.assign({}, data);
      } else {
        // reset data when empty message received
        console.log('RESET');
        console.log(orgData);
        this.orgDataInputed = orgData;
      }
    });
  }
  ngOnInit() {
    console.log('ORG-CHARTS-PAGE');
    console.log(this.orgDataInputed);
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  onSelectedData(data: string) {
    console.log('PAM');
    console.log(data);
    this.selected = data;
  }
}
