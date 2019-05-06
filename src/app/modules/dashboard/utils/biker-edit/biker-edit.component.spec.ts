import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerEditComponent } from './biker-edit.component';

describe('BikerEditComponent', () => {
  let component: BikerEditComponent;
  let fixture: ComponentFixture<BikerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
