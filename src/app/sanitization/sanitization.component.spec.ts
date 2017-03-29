import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanitizationComponent } from './sanitization.component';

describe('SanitizationComponent', () => {
  let component: SanitizationComponent;
  let fixture: ComponentFixture<SanitizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanitizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanitizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
