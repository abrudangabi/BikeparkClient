import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikerContactEditComponent } from './biker-contact-edit.component';

describe('BikerContactEditComponent', () => {
  let component: BikerContactEditComponent;
  let fixture: ComponentFixture<BikerContactEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikerContactEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikerContactEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
