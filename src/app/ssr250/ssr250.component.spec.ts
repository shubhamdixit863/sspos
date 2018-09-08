import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssr250Component } from './ssr250.component';

describe('Ssr250Component', () => {
  let component: Ssr250Component;
  let fixture: ComponentFixture<Ssr250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssr250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssr250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
