import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';
import { SharedModule } from 'app/shared/shared.module';
import { UserRoutingModule } from 'app/user/user-routing.module';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [AuthService, AuthGuard]
})
export class UserModule { }
