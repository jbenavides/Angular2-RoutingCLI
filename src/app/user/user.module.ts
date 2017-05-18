import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class UserModule { }
