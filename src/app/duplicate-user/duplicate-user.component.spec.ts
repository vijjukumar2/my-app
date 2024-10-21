import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicateUserComponent } from './duplicate-user.component';

describe('DuplicateUserComponent', () => {
  let component: DuplicateUserComponent;
  let fixture: ComponentFixture<DuplicateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
