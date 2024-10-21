import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetailesComponent } from './bank-detailes.component';

describe('BankDetailesComponent', () => {
  let component: BankDetailesComponent;
  let fixture: ComponentFixture<BankDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDetailesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
