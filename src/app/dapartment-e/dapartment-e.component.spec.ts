import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DapartmentEComponent } from './dapartment-e.component';

describe('DapartmentEComponent', () => {
  let component: DapartmentEComponent;
  let fixture: ComponentFixture<DapartmentEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DapartmentEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DapartmentEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
