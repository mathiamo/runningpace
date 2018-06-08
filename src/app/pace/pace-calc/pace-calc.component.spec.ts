import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceCalcComponent } from './pace-calc.component';

describe('PaceCalcComponent', () => {
  let component: PaceCalcComponent;
  let fixture: ComponentFixture<PaceCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaceCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaceCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
