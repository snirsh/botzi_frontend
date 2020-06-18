import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampainFormComponent } from './campain-form.component';

describe('CampainFormComponent', () => {
  let component: CampainFormComponent;
  let fixture: ComponentFixture<CampainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
