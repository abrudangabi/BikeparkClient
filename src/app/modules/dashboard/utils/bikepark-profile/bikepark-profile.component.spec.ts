import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeparkProfileComponent } from './bikepark-profile.component';

describe('BikeparkProfileComponent', () => {
  let component: BikeparkProfileComponent;
  let fixture: ComponentFixture<BikeparkProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeparkProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeparkProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
