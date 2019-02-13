import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatnavComponent } from './satnav.component';

describe('SatnavComponent', () => {
  let component: SatnavComponent;
  let fixture: ComponentFixture<SatnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
