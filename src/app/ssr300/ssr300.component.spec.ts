import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssr300Component } from './ssr300.component';

describe('Ssr300Component', () => {
  let component: Ssr300Component;
  let fixture: ComponentFixture<Ssr300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssr300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssr300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
