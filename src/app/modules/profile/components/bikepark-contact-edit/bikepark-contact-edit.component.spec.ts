import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeparkContactEditComponent } from './bikepark-contact-edit.component';

describe('BikeparkContactEditComponent', () => {
  let component: BikeparkContactEditComponent;
  let fixture: ComponentFixture<BikeparkContactEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeparkContactEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeparkContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
