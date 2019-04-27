import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraseuListItemComponent } from './traseu-list-item.component';

describe('TraseuListItemComponent', () => {
  let component: TraseuListItemComponent;
  let fixture: ComponentFixture<TraseuListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraseuListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraseuListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
