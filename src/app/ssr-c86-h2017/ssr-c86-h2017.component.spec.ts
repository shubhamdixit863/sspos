import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrC86H2017Component } from './ssr-c86-h2017.component';

describe('SsrC86H2017Component', () => {
  let component: SsrC86H2017Component;
  let fixture: ComponentFixture<SsrC86H2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsrC86H2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsrC86H2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
