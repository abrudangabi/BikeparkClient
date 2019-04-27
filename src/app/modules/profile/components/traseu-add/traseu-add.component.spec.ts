import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraseuAddComponent } from './traseu-add.component';

describe('TraseuAddComponent', () => {
  let component: TraseuAddComponent;
  let fixture: ComponentFixture<TraseuAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraseuAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraseuAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
