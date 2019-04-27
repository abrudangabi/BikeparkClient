import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursDetailsComponent } from './concurs-details.component';

describe('ConcursDetailsComponent', () => {
  let component: ConcursDetailsComponent;
  let fixture: ComponentFixture<ConcursDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
