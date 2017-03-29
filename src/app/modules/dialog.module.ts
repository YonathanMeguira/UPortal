import { DialogsService } from '../services/dialogs/dialogs.service';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ConfirmDialog }   from '../services/dialogs/dialog.component';

@NgModule({
    imports: [
        MaterialModule.forRoot(),
    ],
    exports: [
        ConfirmDialog,
    ],
    declarations: [
        ConfirmDialog,
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        ConfirmDialog,
    ],
})
export class DialogsModule { }