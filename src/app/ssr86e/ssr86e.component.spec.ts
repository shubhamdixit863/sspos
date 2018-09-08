import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssr86eComponent } from './ssr86e.component';

describe('Ssr86eComponent', () => {
  let component: Ssr86eComponent;
  let fixture: ComponentFixture<Ssr86eComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ssr86eComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ssr86eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
