import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeparksPageComponent } from './bikeparks-page.component';

describe('BikeparksPageComponent', () => {
  let component: BikeparksPageComponent;
  let fixture: ComponentFixture<BikeparksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeparksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeparksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
