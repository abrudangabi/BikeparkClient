import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursListForBikeparkComponent } from './concurs-list-for-bikepark.component';

describe('ConcursListForBikeparkComponent', () => {
  let component: ConcursListForBikeparkComponent;
  let fixture: ComponentFixture<ConcursListForBikeparkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursListForBikeparkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursListForBikeparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
