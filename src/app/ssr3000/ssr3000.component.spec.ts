import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssr3000Component } from './ssr3000.component';

describe('Ssr3000Component', () => {
  let component: Ssr3000Component;
  let fixture: ComponentFixture<Ssr3000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssr3000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssr3000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
