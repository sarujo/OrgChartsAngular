import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { MsgService } from '../../msgservice';
import { OrgChartDTO } from 'src/app/interfaces/orgChart';

@Component({
  selector: 'app-org-data-input',
  templateUrl: './org-data-input.component.html',
  styleUrls: ['./org-data-input.component.scss'],
})
export class OrgDataInputComponent implements OnChanges, OnInit {
  @Input() orgChartData: OrgChartDTO;
  @Input() selected: string;

  myForm: FormGroup;

  data: any = this.orgChartData;

  submitted = false;

  constructor(private fb: FormBuilder, private messageService: MsgService) {}

  ngOnInit() {
    console.log('ORG-DATA-INPUT INIT');
    this.setOrgInputData(this.orgChartData);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('CHANGED in ORG-DATA-INPUT');
    console.log(changes);
    this.setOrgInputData(this.orgChartData);
  }

  setOrgInputData(orgChartData: OrgChartDTO) {
    this.data = {
      owners: orgChartData.owners.map(item => ({
        ...item,
        name: item.name,
        ownerOf: [
          {
            externalCustomerKey: item.ownerOf[0].externalCustomerKey,
            ownershipPercentage: item.ownerOf[0].ownershipPercentage,
            votingRightsPercentage: item.ownerOf[0].votingRightsPercentage,
          },
        ],
      })),
    };
    this.myForm = this.fb.group({
      base: orgChartData.base,
      owners: this.fb.array([]),
    });
    this.setOwners();
  }

  addNewOwner() {
    const control = <FormArray>this.myForm.controls.owners;
    control.push(
      this.fb.group({
        name: [''],
        id: (
          Number(
            this.myForm.value.owners[this.myForm.value.owners.length - 1].id,
          ) + 1
        ).toString(),
        ownerOf: this.fb.array([
          this.fb.group({
            externalCustomerKey: '123',
            ownershipType: ['Direktor'],
            ownershipPercentage: ['10'],
            votingRightsPercentage: ['15'],
          }),
        ]),
      }),
    );
  }

  deleteOwner(index) {
    const control = <FormArray>this.myForm.controls.owners;
    control.removeAt(index);
  }

  addNewRelation(control) {
    control.push(
      this.fb.group({
        ...control,
        externalCustomerKey: ['123'],
      }),
    );
  }

  deleteRelation(control, index) {
    control.removeAt(index);
  }

  setOwners() {
    const control = <FormArray>this.myForm.controls.owners;
    this.orgChartData.owners.forEach(x => {
      control.push(
        this.fb.group({
          ...x,
          name: x.name,
          ownerOf: this.setRelation(x),
        }),
      );
    });
  }

  setRelation(x) {
    const arr = new FormArray([]);
    x.ownerOf.forEach(y => {
      arr.push(
        this.fb.group({
          ...y,
          externalCustomerKey: [
            y.externalCustomerKey,
            [
              Validators.required,
              this.externalCustomerNumberValidator(this.orgChartData),
            ],
          ],
          ownershipPercentage: [y.ownershipPercentage],
          votingRightsPercentage: [y.votingRightsPercentage],
        }),
      );
    });
    return arr;
  }

  sendMessage(): void {
    this.messageService.sendMessage(this.myForm.value);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.myForm.invalid) {
      console.log('INVALID');
      console.log(this.myForm);
      return;
    }
    console.log('SUCCESS');
    this.messageService.sendMessage(this.myForm.value);
  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }

  externalCustomerNumberValidator(data: OrgChartDTO): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const valid =
        control.value === data.base.externalCustomerKey ||
        data.owners
          .map(owner => owner.ownerOf.map(item => item.externalCustomerKey))
          .find(key => key[0] === control.value);
      return valid
        ? null
        : { invalidKey: { valid: false, value: control.value } };
    };
  }

  getOwnerId(owner: any) {
    console.log(owner);
    return -1;
  }
}
