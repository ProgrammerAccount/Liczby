import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexComponent } from './hex.component';
import { FormsModule } from '@angular/forms';

describe('HexComponent', () => {
  let component: HexComponent;
  let fixture: ComponentFixture<HexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexComponent ],
      imports: [FormsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Bin Convert To Hex', () => {
    expect(component.BinToHex('000000000000000000000000000000000000000011111111')).toBe('FF');
  });
  it('Hex convert to Bin', () => {
    expect(component.HexToBin('000000000000000000000000000000FF')).toBe('11111111');
  });
  it('Hex convert to Bin', () => {
    expect(component.HexToBin('F0F')).toBe('111100001111');
  });
  it('syntax Validation', () => {
    expect(component.ValidateNumber('FF')).toBe(true);
  });
});
