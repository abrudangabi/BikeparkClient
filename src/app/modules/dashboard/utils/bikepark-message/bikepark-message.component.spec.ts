import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeparkMessageComponent } from './bikepark-message.component';

describe('BikeparkMessageComponent', () => {
  let component: BikeparkMessageComponent;
  let fixture: ComponentFixture<BikeparkMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeparkMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeparkMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
