import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerInfoComponent } from './biker-info.component';

describe('BikerInfoComponent', () => {
  let component: BikerInfoComponent;
  let fixture: ComponentFixture<BikerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
