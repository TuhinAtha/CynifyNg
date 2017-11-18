import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CynAdvSearchComponent } from './cyn-adv-search.component';

describe('CynAdvSearchComponent', () => {
  let component: CynAdvSearchComponent;
  let fixture: ComponentFixture<CynAdvSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CynAdvSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CynAdvSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
