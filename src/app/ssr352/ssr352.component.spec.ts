import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssr352Component } from './ssr352.component';

describe('Ssr352Component', () => {
  let component: Ssr352Component;
  let fixture: ComponentFixture<Ssr352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssr352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssr352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
