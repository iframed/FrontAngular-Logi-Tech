import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppwebComponent } from './appweb.component';

describe('AppwebComponent', () => {
  let component: AppwebComponent;
  let fixture: ComponentFixture<AppwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppwebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
