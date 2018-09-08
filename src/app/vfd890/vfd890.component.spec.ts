import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vfd890Component } from './vfd890.component';

describe('Vfd890Component', () => {
  let component: Vfd890Component;
  let fixture: ComponentFixture<Vfd890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vfd890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vfd890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
