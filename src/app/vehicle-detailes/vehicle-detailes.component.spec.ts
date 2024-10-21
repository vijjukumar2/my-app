import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDetailesComponent } from './vehicle-detailes.component';

describe('VehicleDetailesComponent', () => {
  let component: VehicleDetailesComponent;
  let fixture: ComponentFixture<VehicleDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleDetailesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
