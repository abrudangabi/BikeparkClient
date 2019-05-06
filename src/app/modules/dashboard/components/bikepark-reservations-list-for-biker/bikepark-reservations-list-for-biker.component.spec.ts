import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeparkReservationsListForBikerComponent } from './bikepark-reservations-list-for-biker.component';

describe('BikeparkReservationsListForBikerComponent', () => {
  let component: BikeparkReservationsListForBikerComponent;
  let fixture: ComponentFixture<BikeparkReservationsListForBikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeparkReservationsListForBikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeparkReservationsListForBikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
