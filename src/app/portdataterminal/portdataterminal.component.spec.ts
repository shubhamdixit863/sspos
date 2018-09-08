import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortdataterminalComponent } from './portdataterminal.component';

describe('PortdataterminalComponent', () => {
  let component: PortdataterminalComponent;
  let fixture: ComponentFixture<PortdataterminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortdataterminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortdataterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
