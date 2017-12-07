import {NgModule} from '@angular/core';

import {
  MdSlideToggleModule,
  MdInputModule,
  MdRippleModule,
  MdDatepickerModule,
  MdNativeDateModule,
  StyleModule
} from '@angular/material';

import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';

/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
@NgModule({
  exports: [
    MdSlideToggleModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdInputModule,
    MdRippleModule,
    StyleModule,
    ObserversModule,
    PlatformModule
  ]
})
export class CustomMaterialModule {}
