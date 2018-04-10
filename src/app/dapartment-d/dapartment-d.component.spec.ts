import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DapartmentDComponent } from './dapartment-d.component';

describe('DapartmentDComponent', () => {
  let component: DapartmentDComponent;
  let fixture: ComponentFixture<DapartmentDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DapartmentDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DapartmentDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
