import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournyComponent } from './journy.component';

describe('JournyComponent', () => {
  let component: JournyComponent;
  let fixture: ComponentFixture<JournyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
