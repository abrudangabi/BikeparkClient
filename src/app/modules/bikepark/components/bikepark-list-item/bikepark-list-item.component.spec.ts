import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeparkListItemComponent } from './bikepark-list-item.component';

describe('BikeparkListItemComponent', () => {
  let component: BikeparkListItemComponent;
  let fixture: ComponentFixture<BikeparkListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeparkListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeparkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
