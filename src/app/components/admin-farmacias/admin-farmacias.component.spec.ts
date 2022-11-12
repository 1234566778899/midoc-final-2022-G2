import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFarmaciasComponent } from './admin-farmacias.component';

describe('AdminFarmaciasComponent', () => {
  let component: AdminFarmaciasComponent;
  let fixture: ComponentFixture<AdminFarmaciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFarmaciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminFarmaciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
