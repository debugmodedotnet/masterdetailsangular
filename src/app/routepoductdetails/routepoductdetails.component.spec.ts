import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutepoductdetailsComponent } from './routepoductdetails.component';

describe('RoutepoductdetailsComponent', () => {
  let component: RoutepoductdetailsComponent;
  let fixture: ComponentFixture<RoutepoductdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutepoductdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutepoductdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
