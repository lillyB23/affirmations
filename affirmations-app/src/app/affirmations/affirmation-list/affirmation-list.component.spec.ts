import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffirmationListComponent } from './affirmation-list.component';

describe('AffirmationListComponent', () => {
  let component: AffirmationListComponent;
  let fixture: ComponentFixture<AffirmationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffirmationListComponent]
    });
    fixture = TestBed.createComponent(AffirmationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
