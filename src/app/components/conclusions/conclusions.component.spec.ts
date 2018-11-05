import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConclusionsComponent } from './conclusions.component';

describe('ConclusionsComponent', () => {
  let component: ConclusionsComponent;
  let fixture: ComponentFixture<ConclusionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConclusionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConclusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
