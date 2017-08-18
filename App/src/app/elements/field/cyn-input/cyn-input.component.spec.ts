import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CynInputComponent } from './cyn-input.component';

describe('CynInputComponent', () => {
  let component: CynInputComponent;
  let fixture: ComponentFixture<CynInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CynInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CynInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
