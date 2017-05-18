import { NgModule } from '@angular/core';
import { MessageService } from './message.service';
import { MessageComponent } from './message.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [MessageComponent],
  providers: [MessageService]
})
export class MessageModule { }
