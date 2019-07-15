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
  orgChartRemapedData: any = [];
  constructor() {}

  title = '';
  type = 'OrgChart';
  columnNames = ['Name', 'Manager', 'Tooltip'];
  dataOrgChart = {};
  options = {
    allowHtml: true,
  };
  width = 550;
  height = 400;

  getName(data: any, externalCustomerKey: string): any {
    const baseName = 'Danske'; // data.base.companyName;
    const namesOfOwned = data.filter(
      item => item.owner.externalCustomerKey === externalCustomerKey,
    );
    console.log('-----------------');
    console.log(data);
    console.log(namesOfOwned);
    // bc3494 check in owners, if not found in baseName, else no good news
    const nameOfOwned =
      (namesOfOwned[0] &&
        namesOfOwned[0].owner.id +
          namesOfOwned[0].ownerOf.externalCustomerKey) ||
      baseName;
    console.log(nameOfOwned);
    return nameOfOwned;
  }

  testFunction = (data: any, getName: any) => {
    return new Promise((resolve, reject) =>
      resolve(
        data.map(item => [
          {
            v: item.owner.id + item.ownerOf.externalCustomerKey,
            f:
              '<div id="' +
              item.owner.id +
              item.ownerOf.externalCustomerKey +
              '" style="font-weight:bold">' +
              item.ownerOf.ownershipPercentage +
              '%' +
              '<span style="font-weight:normal">' +
              item.owner.name +
              '</span>' +
              '<div style="font-weight:bold">' +
              item.owner.customerType +
              '</div>' +
              '<div style="color:red; font-style:italic">' +
              item.ownerOf.ownershipType +
              '</div>',
          },
          getName(data, item.ownerOf.externalCustomerKey),
          '',
        ]),
      ),
    );
  };

  ngOnInit() {
    console.log('ORG_CHART INIT');

    this.orgChartData.owners.map(owner =>
      owner.ownerOf.map(unit =>
        this.orgChartRemapedData.push({ owner: owner, ownerOf: unit }),
      ),
    ),
      console.log(this.orgChartRemapedData);

    // this.dataOrgChart = this.setOrgChartData(this.orgChartRemapedData);
    console.log('PRE');
    this.testFunction(this.orgChartRemapedData, this.getName)
      .then(data => {
        this.dataOrgChart = data;
      })
      .then(() => console.log('DONE +++++ ++++ ++++'));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CHANGED in ORG-CHART');
    console.log(changes);
    const orgChartRemapedData = [];

    this.orgChartData.owners.map(owner =>
      owner.ownerOf.map(unit =>
        orgChartRemapedData.push({ owner: owner, ownerOf: unit }),
      ),
    ),
      console.log(orgChartRemapedData);

    // this.dataOrgChart = this.setOrgChartData(orgChartRemapedData);
    console.log('PRE CHANGED');
    this.testFunction(orgChartRemapedData, this.getName)
      .then(data => {
        console.log('|||||||||||');
        console.log(data);
        this.dataOrgChart = data;
      })
      .then(() => {
        const elm = document.getElementById('google-chart');
        const value = elm.innerHTML;
        const objToSend = JSON.stringify(value);
        console.log('=========');
        console.log(objToSend);
        console.log('=========');
      });
  }

  setOrgChartData(data: any) {
    return data.map(item => [
      {
        v: item.owner.id + item.ownerOf.externalCustomerKey,
        f:
          '<div id="' +
          item.owner.id +
          item.ownerOf.externalCustomerKey +
          '" style="font-weight:bold">' +
          item.ownerOf.ownershipPercentage +
          '%' +
          '<span style="font-weight:normal">' +
          item.owner.name +
          '</span>' +
          '<div style="font-weight:bold">' +
          item.owner.customerType +
          '</div>' +
          '<div style="color:red; font-style:italic">' +
          item.ownerOf.ownershipType +
          '</div>',
      },
      this.getName(data, item.ownerOf.externalCustomerKey),
      '',
    ]);
  }

  onSelect(event: ChartEvent) {
    console.log('EVENTUX');
    console.log(event);
    if (event[0] === undefined) {
      this.orgChartRemapedData.map(item =>
        document
          .getElementById(item.owner.id + item.ownerOf.externalCustomerKey)
          .parentElement.classList.remove(
            'google-visualization-orgchart-nodesel',
          ),
      );
    } else {
      this.orgChartRemapedData.map(item =>
        item.owner.name === this.orgChartRemapedData[event[0].row].owner.name
          ? (document.getElementById(
              item.owner.id + item.ownerOf.externalCustomerKey,
            ).parentElement.className +=
              ' google-visualization-orgchart-nodesel')
          : document
              .getElementById(item.owner.id + item.ownerOf.externalCustomerKey)
              .parentElement.classList.remove(
                'google-visualization-orgchart-nodesel',
              ),
      );
    }
    console.log(this.orgChartRemapedData);
    const selection =
      event[0] !== undefined
        ? this.orgChartRemapedData[event[0].row].owner.id
        : null;
    console.log('SELECTION: ' + selection);
    this.selectedData.emit(selection);
  }
}
