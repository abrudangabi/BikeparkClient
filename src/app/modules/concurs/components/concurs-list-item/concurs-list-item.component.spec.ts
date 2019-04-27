import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcursListItemComponent } from './concurs-list-item.component';

describe('ConcursListItemComponent', () => {
  let component: ConcursListItemComponent;
  let fixture: ComponentFixture<ConcursListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcursListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcursListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
