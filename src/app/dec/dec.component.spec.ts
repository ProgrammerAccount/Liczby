import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecComponent } from './dec.component';

describe('DecComponent', () => {
  let component: DecComponent;
  let fixture: ComponentFixture<DecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
