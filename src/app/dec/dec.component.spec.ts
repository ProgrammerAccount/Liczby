import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecComponent } from './dec.component';
import { FormsModule } from '@angular/forms';

describe('DecComponent', () => {
  let component: DecComponent;
  let fixture: ComponentFixture<DecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecComponent ],
      imports: [FormsModule]

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

  it('Dec Convert to Bin', () => {
    expect(component.DecToBin(64)).toBe('1000000');
  });

  it('Bin Convert to Dec', () => {
    expect(component.BinToDec('1000000')).toBe(64);
  });
  it('Validation Working', () => {
    expect(component.ValidateNumber('a1a1a1a1')).toBe(false);
  });
});
