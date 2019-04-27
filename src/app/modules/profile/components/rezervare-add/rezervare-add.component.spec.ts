import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervareAddComponent } from './rezervare-add.component';

describe('RezervareAddComponent', () => {
  let component: RezervareAddComponent;
  let fixture: ComponentFixture<RezervareAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervareAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervareAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
