import { NgModule } from '@angular/core';
import {MatInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule

} from '@angular/material';

const MaterialComponents=[
  MatInputModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatCheckboxModule,
  MatCardModule
];


@NgModule({

  imports: [MaterialComponents],
  exports:[MaterialComponents]

})
export class MaterialModule { }
