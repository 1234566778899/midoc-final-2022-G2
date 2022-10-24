import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanzasProductosComponent } from './finanzas-productos.component';

describe('FinanzasProductosComponent', () => {
  let component: FinanzasProductosComponent;
  let fixture: ComponentFixture<FinanzasProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanzasProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanzasProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
