import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursEditComponent } from './concurs-edit.component';

describe('ConcursEditComponent', () => {
  let component: ConcursEditComponent;
  let fixture: ComponentFixture<ConcursEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
