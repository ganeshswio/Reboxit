import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatloginComponent } from './satlogin.component';

describe('SatloginComponent', () => {
  let component: SatloginComponent;
  let fixture: ComponentFixture<SatloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
