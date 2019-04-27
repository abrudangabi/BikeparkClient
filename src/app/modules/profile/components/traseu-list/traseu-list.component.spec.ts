import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraseuListComponent } from './traseu-list.component';

describe('TraseuListComponent', () => {
  let component: TraseuListComponent;
  let fixture: ComponentFixture<TraseuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraseuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraseuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
