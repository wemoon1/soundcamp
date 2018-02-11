import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';

import { EventCardComponent } from './event-card.component';

// stub component
@Component({
  selector: 'app-stub-component',
  template: ''
})
class StubComponent {}

describe('EventCardComponent', () => {
  let component: EventCardComponent;
  let fixture: ComponentFixture<EventCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCardComponent, StubComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'event/:id', component: StubComponent}
        ])
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get routerLink from template', async(() => {
    // todo: test link params
    const links = fixture.debugElement.queryAll(By.css('a'));
    const link = links[0];
    expect(link.properties.href).toEqual('/event/2');
  }));

  it('should navigate to /event/:id when clicked', async(() => {
    // todo: test link params
    const location = TestBed.get(Location);
    const links = fixture.debugElement.queryAll(By.css('a'));
    const link = links[0].nativeElement;
    link.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/event/2');
    });
  }));
});
