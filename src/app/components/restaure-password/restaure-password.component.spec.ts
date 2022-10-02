import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurePasswordComponent } from './restaure-password.component';

describe('RestaurePasswordComponent', () => {
  let component: RestaurePasswordComponent;
  let fixture: ComponentFixture<RestaurePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurePasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
