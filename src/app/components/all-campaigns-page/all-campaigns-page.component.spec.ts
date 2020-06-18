import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCampaignsPageComponent } from './all-campaigns-page.component';

describe('AllCampaignsPageComponent', () => {
  let component: AllCampaignsPageComponent;
  let fixture: ComponentFixture<AllCampaignsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllCampaignsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCampaignsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
