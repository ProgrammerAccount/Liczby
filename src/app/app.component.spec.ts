import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BinComponent } from './bin/bin.component';
import { HexComponent } from './hex/hex.component';
import { DecComponent } from './dec/dec.component';
import { OtcComponent } from './otc/otc.component';
import { BrowserModule } from '@angular/platform-browser';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BinComponent,
        HexComponent,
        DecComponent,
        OtcComponent
      ],
      imports: [
       FormsModule,
       BrowserModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
