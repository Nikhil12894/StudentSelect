import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DapartmentCComponent } from './dapartment-c.component';

describe('DapartmentCComponent', () => {
  let component: DapartmentCComponent;
  let fixture: ComponentFixture<DapartmentCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DapartmentCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DapartmentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
