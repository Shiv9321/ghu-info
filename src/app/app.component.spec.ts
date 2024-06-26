import {ComponentFixture, TestBed} from "@angular/core/testing";
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { GetuserComponent } from "./getuser/getuser.component";

import { FormsModule } from '@angular/forms'; // Import FormsModule


describe('AppComponent', () =>
{
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent,GetuserComponent],
    imports: [HttpClientModule,FormsModule],
  }));

  it('should create the app', () =>
  {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
