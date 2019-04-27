import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursDetailsPageComponent } from './concurs-details-page.component';

describe('ConcursDetailsPageComponent', () => {
  let component: ConcursDetailsPageComponent;
  let fixture: ComponentFixture<ConcursDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
