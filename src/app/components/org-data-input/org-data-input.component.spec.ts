import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgDataInputComponent } from './org-data-input.component';

describe('OrgDataInputComponent', () => {
  let component: OrgDataInputComponent;
  let fixture: ComponentFixture<OrgDataInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrgDataInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
