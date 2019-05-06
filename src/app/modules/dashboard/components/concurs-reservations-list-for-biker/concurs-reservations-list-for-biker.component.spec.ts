import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursReservationsListForBikerComponent } from './concurs-reservations-list-for-biker.component';

describe('ConcursReservationsListForBikerComponent', () => {
  let component: ConcursReservationsListForBikerComponent;
  let fixture: ComponentFixture<ConcursReservationsListForBikerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursReservationsListForBikerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursReservationsListForBikerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
