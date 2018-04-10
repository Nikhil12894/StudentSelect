import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DapartmentAComponent } from './dapartment-a.component';

describe('DapartmentAComponent', () => {
  let component: DapartmentAComponent;
  let fixture: ComponentFixture<DapartmentAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DapartmentAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DapartmentAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
