import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformationdigitaleComponent } from './transformationdigitale.component';

describe('TransformationdigitaleComponent', () => {
  let component: TransformationdigitaleComponent;
  let fixture: ComponentFixture<TransformationdigitaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformationdigitaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransformationdigitaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
