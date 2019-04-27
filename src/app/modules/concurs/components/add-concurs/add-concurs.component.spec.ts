import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConcursComponent } from './add-concurs.component';

describe('AddConcursComponent', () => {
  let component: AddConcursComponent;
  let fixture: ComponentFixture<AddConcursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConcursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConcursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
