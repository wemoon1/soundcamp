import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { VenueListComponent } from './venue-list.component';

describe('VenueListComponent', () => {
  let component: VenueListComponent;
  let fixture: ComponentFixture<VenueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueListComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
