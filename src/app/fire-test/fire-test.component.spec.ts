import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireTestComponent } from './fire-test.component';

describe('FireTestComponent', () => {
  let component: FireTestComponent;
  let fixture: ComponentFixture<FireTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FireTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
