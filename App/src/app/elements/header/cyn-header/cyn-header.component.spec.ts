import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CynHeaderComponent } from './cyn-header.component';

describe('CynHeaderComponent', () => {
  let component: CynHeaderComponent;
  let fixture: ComponentFixture<CynHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CynHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CynHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
