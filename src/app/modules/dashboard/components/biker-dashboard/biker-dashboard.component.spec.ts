import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerDashboardComponent } from './biker-dashboard.component';

describe('BikerDashboardComponent', () => {
  let component: BikerDashboardComponent;
  let fixture: ComponentFixture<BikerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
