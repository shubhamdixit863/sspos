import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrC86HComponent } from './ssr-c86-h.component';

describe('SsrC86HComponent', () => {
  let component: SsrC86HComponent;
  let fixture: ComponentFixture<SsrC86HComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsrC86HComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsrC86HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
