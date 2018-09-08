import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsondotmatrixComponent } from './epsondotmatrix.component';

describe('EpsondotmatrixComponent', () => {
  let component: EpsondotmatrixComponent;
  let fixture: ComponentFixture<EpsondotmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpsondotmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpsondotmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
