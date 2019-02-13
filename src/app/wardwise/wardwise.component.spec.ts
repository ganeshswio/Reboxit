import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardwiseComponent } from './wardwise.component';

describe('WardwiseComponent', () => {
  let component: WardwiseComponent;
  let fixture: ComponentFixture<WardwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WardwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
