import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervareConcursAddComponent } from './rezervare-concurs-add.component';

describe('RezervareConcursAddComponent', () => {
  let component: RezervareConcursAddComponent;
  let fixture: ComponentFixture<RezervareConcursAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervareConcursAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervareConcursAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
