import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './page/user.component';
import { AddDialogComponent } from './page/dialogs/add/add.dialog.component';
import { EditDialogComponent } from './page/dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from './page/dialogs/delete/delete.dialog.component';
import { DataService } from './page/services/data.service';

@NgModule({
  declarations: [
    UserComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [UserRoutingModule, SharedModule],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent
  ],
  providers: [DataService],
  bootstrap: [UserComponent]
})
export class UserModule {}
