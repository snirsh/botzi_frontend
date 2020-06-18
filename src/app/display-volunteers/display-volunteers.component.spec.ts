import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVolunteersComponent } from './display-volunteers.component';

describe('DisplayVolunteersComponent', () => {
  let component: DisplayVolunteersComponent;
  let fixture: ComponentFixture<DisplayVolunteersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayVolunteersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayVolunteersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
