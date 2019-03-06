import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeparkListComponent } from './bikepark-list.component';

describe('BikeparkListComponent', () => {
  let component: BikeparkListComponent;
  let fixture: ComponentFixture<BikeparkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeparkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeparkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
