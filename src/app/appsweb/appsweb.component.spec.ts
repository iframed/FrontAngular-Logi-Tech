import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppswebComponent } from './appsweb.component';

describe('AppswebComponent', () => {
  let component: AppswebComponent;
  let fixture: ComponentFixture<AppswebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppswebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppswebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
