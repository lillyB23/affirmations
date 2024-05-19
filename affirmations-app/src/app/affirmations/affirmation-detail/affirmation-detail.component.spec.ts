import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffirmationDetailComponent } from './affirmation-detail.component';

describe('AffirmationDetailComponent', () => {
  let component: AffirmationDetailComponent;
  let fixture: ComponentFixture<AffirmationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffirmationDetailComponent]
    });
    fixture = TestBed.createComponent(AffirmationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
