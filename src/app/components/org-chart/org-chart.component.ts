import {
  Component,
  OnChanges,
  OnInit,
  Input,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { OrgChartDTO, OwnerOf } from 'src/app/interfaces/orgChart';
import { ChartEvent } from 'angular-google-charts';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss'],
})
export class OrgChartComponent implements OnChanges, OnInit {
  @Input() orgChartData: OrgChartDTO;
  @Input() selected: string;
  @Output() selectedData = new EventEmitter<string>();
  constructor() {}

  title = '';
  type = 'OrgChart';
  columnNames = ['Name', 'Manager', 'Tooltip'];
  dataOrgChart = '';
  options = {
    allowHtml: true,
  };
  width = 550;
  height = 400;

  ngOnInit() {
    console.log('ORG_CHART INIT');
    console.log(this.orgChartData);

    this.dataOrgChart = this.setOrgChartData(this.orgChartData);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CHANGED in ORG-CHART');
    console.log(changes);
    this.dataOrgChart = this.setOrgChartData(this.orgChartData);
  }

  setOrgChartData(orgChartData: any) {
    return orgChartData.owners.map(item => [
      {
        v: item.name,
        f:
          '<div style="font-weight:bold">' +
          item.ownerOf[0].ownershipPercentage +
          '%' +
          '<span style="font-weight:normal">' +
          item.name +
          '</span>' +
          '<div style="font-weight:bold">' +
          item.customerType +
          '</div>' +
          '<div style="color:red; font-style:italic">' +
          item.ownerOf[0].ownershipType +
          '</div>' +
          this.getSecondaryOwner(item.ownerOf[1]) +
          '<div>Owner of ' +
          item.ownerOf[0].externalCustomerKey +
          '</div>',
      },
      this.getName(orgChartData, item.ownerOf[0].externalCustomerKey),
      '',
    ]);
  }

  getName(data: OrgChartDTO, externalCustomerKey: string): any {
    const baseName = data.base.companyName;
    const namesOfOwned = data.owners.filter(
      item => item.externalCustomerKey === externalCustomerKey,
    );
    // bc3494 check in owners, if not found in baseName, else no good news
    const nameOfOwned = namesOfOwned[0] ? namesOfOwned[0].name : baseName;
    return nameOfOwned;
  }

  getSecondaryOwner(ownerOf: OwnerOf) {
    if (ownerOf) {
      return (
        '<div style="color:orange">' +
        ownerOf.ownershipPercentage +
        '% ' +
        ownerOf.ownershipType +
        '<div> Owner of: ' +
        ownerOf.externalCustomerKey +
        '</div></div>'
      );
    }
    return '';
  }

  onSelect(event: ChartEvent) {
    console.log('nice event:');
    this.selectedData.emit(this.orgChartData.owners[event[0].row].id);
  }
}
