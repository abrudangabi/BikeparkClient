import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeparkDashboardComponent } from './bikepark-dashboard.component';

describe('BikeparkDashboardComponent', () => {
  let component: BikeparkDashboardComponent;
  let fixture: ComponentFixture<BikeparkDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeparkDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeparkDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
