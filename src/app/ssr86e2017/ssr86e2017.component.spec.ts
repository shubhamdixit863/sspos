import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssr86e2017Component } from './ssr86e2017.component';

describe('Ssr86e2017Component', () => {
  let component: Ssr86e2017Component;
  let fixture: ComponentFixture<Ssr86e2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssr86e2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssr86e2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
