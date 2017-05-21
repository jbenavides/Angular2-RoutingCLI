import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from 'app/messages/message.component';

const routes: Routes = [
    {
        path: 'messages',
        component: MessageComponent,
        outlet: 'popup'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageRoutingModule { }
