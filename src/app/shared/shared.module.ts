import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Material CDK
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { LimitToPipe } from './components/ngx-select-dropdown/pipes/limit-to.pipe';
import { FilterByPipe } from './components/ngx-select-dropdown/pipes/filter-by.pipe';
import { NgxSelectDropdownComponent } from './components/ngx-select-dropdown/ngx-select-dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

// Group material modules for headless injection
const materialModules = [
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSelectModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatCardModule,
  MatIconModule,
  MatSortModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatStepperModule,
  MatRadioModule,
  MatGridListModule

];


@NgModule({
  declarations: [
    HeaderComponent,
    NgxSelectDropdownComponent
    , FilterByPipe,
     LimitToPipe,
     ModalComponent,
     ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...materialModules,
    HeaderComponent,
    NgxSelectDropdownComponent,
    ModalComponent,
    ErrorMessageComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
