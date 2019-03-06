import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeparkProfilePageComponent } from './bikepark-profile-page.component';

describe('BikeparkProfilePageComponent', () => {
  let component: BikeparkProfilePageComponent;
  let fixture: ComponentFixture<BikeparkProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeparkProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeparkProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
