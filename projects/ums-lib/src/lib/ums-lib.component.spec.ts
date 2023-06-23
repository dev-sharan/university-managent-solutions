import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmsLibComponent } from './ums-lib.component';

describe('UmsLibComponent', () => {
  let component: UmsLibComponent;
  let fixture: ComponentFixture<UmsLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UmsLibComponent]
    });
    fixture = TestBed.createComponent(UmsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
