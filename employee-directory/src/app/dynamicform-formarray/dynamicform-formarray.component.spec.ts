import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicformFormarrayComponent } from './dynamicform-formarray.component';

describe('DynamicformFormarrayComponent', () => {
  let component: DynamicformFormarrayComponent;
  let fixture: ComponentFixture<DynamicformFormarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicformFormarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicformFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
