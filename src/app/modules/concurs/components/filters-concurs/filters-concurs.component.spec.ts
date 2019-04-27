import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersConcursComponent } from './filters-concurs.component';

describe('FiltersConcursComponent', () => {
  let component: FiltersConcursComponent;
  let fixture: ComponentFixture<FiltersConcursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersConcursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersConcursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
