import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeparkEditComponent } from './bikepark-edit.component';

describe('BikeparkEditComponent', () => {
  let component: BikeparkEditComponent;
  let fixture: ComponentFixture<BikeparkEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeparkEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeparkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
