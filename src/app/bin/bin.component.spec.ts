import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinComponent } from './bin.component';
import { FormsModule } from '@angular/forms';

describe('BinComponent', () => {
  let component: BinComponent;
  let fixture: ComponentFixture<BinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinComponent ],
      imports: [FormsModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
