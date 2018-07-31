import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalstatusComponent } from './finalstatus.component';

describe('FinalstatusComponent', () => {
  let component: FinalstatusComponent;
  let fixture: ComponentFixture<FinalstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
