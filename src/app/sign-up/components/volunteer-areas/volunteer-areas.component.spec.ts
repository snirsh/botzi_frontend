import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerAreasComponent } from './volunteer-areas.component';

describe('VolunteerAreasComponent', () => {
  let component: VolunteerAreasComponent;
  let fixture: ComponentFixture<VolunteerAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
