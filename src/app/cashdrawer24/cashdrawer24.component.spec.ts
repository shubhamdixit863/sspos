import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cashdrawer24Component } from './cashdrawer24.component';

describe('Cashdrawer24Component', () => {
  let component: Cashdrawer24Component;
  let fixture: ComponentFixture<Cashdrawer24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cashdrawer24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cashdrawer24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
