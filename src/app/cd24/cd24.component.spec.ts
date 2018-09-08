import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cd24Component } from './cd24.component';

describe('Cd24Component', () => {
  let component: Cd24Component;
  let fixture: ComponentFixture<Cd24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cd24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cd24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
