import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursListComponent } from './concurs-list.component';

describe('ConcursListComponent', () => {
  let component: ConcursListComponent;
  let fixture: ComponentFixture<ConcursListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
