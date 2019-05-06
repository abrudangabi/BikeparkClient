import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerLocationEditComponent } from './biker-location-edit.component';

describe('BikerLocationEditComponent', () => {
  let component: BikerLocationEditComponent;
  let fixture: ComponentFixture<BikerLocationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerLocationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikerLocationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
