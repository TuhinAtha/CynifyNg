import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CynFormComponent } from './cyn-form.component';

describe('CynFormComponent', () => {
  let component: CynFormComponent;
  let fixture: ComponentFixture<CynFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CynFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CynFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
