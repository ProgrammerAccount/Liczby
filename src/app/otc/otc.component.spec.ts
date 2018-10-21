import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtcComponent } from './otc.component';
import { FormsModule } from '@angular/forms';

describe('OtcComponent', () => {
  let component: OtcComponent;
  let fixture: ComponentFixture<OtcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtcComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Otc Convert to Bin', () => {
    expect(component.OctToBin('64')).toBe('110100');
    expect(component.OctToBin('7')).toBe('111');
    expect(component.OctToBin('0')).toBe('0');
    expect(component.OctToBin('000000000000000001')).toBe('1');
    expect(component.OctToBin('000000000002')).toBe('10');
  });

  it('Bin Convert to Otc', () => {
    expect(component.BinToOct('110100')).toBe('64');
    expect(component.BinToOct('111111')).toBe('77');
    expect(component.BinToOct('0')).toBe('0');
    expect(component.BinToOct('00000000000000001')).toBe('1');
    expect(component.BinToOct('10')).toBe('2');
  });
  it('Validation Corect syntax', () => {
    expect(component.ValidateNumber('11171')).toBe(true);
  });
  it('Validation uncorect syntax', () => {
    expect(component.ValidateNumber('aa88123')).toBe(false);
  });
});
