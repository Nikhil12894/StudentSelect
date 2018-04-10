import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DapartmentBComponent } from './dapartment-b.component';

describe('DapartmentBComponent', () => {
  let component: DapartmentBComponent;
  let fixture: ComponentFixture<DapartmentBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DapartmentBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DapartmentBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
