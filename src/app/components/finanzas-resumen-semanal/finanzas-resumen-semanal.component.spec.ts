import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzasResumenSemanalComponent } from './finanzas-resumen-semanal.component';

describe('FinanzasResumenSemanalComponent', () => {
  let component: FinanzasResumenSemanalComponent;
  let fixture: ComponentFixture<FinanzasResumenSemanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanzasResumenSemanalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanzasResumenSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
