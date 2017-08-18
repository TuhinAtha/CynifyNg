import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CynHeaderActionComponent } from './cyn-header-action.component';

describe('CynHeaderActionComponent', () => {
  let component: CynHeaderActionComponent;
  let fixture: ComponentFixture<CynHeaderActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CynHeaderActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CynHeaderActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
