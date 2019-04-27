import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursPageComponent } from './concurs-page.component';

describe('ConcursPageComponent', () => {
  let component: ConcursPageComponent;
  let fixture: ComponentFixture<ConcursPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
