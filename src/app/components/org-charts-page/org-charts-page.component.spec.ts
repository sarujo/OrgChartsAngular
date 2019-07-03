import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgChartsPageComponent } from './org-charts-page.component';

describe('OrgChartsPageComponent', () => {
  let component: OrgChartsPageComponent;
  let fixture: ComponentFixture<OrgChartsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrgChartsPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgChartsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
