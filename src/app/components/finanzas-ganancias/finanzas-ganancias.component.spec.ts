import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzasGananciasComponent } from './finanzas-ganancias.component';

describe('FinanzasGananciasComponent', () => {
  let component: FinanzasGananciasComponent;
  let fixture: ComponentFixture<FinanzasGananciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanzasGananciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanzasGananciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
