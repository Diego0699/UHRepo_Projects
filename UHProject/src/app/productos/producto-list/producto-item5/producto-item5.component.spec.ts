import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoItem5Component } from './producto-item5.component';

describe('ProductoItem5Component', () => {
  let component: ProductoItem5Component;
  let fixture: ComponentFixture<ProductoItem5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoItem5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoItem5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
