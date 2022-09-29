import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoItem2Component } from './producto-item2.component';

describe('ProductoItem2Component', () => {
  let component: ProductoItem2Component;
  let fixture: ComponentFixture<ProductoItem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoItem2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
