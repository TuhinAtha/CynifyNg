import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CynTableComponent } from './cyn-table.component';

describe('CynTableComponent', () => {
  let component: CynTableComponent;
  let fixture: ComponentFixture<CynTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CynTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CynTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
