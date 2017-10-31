import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';

import { QuillModule, QuillConfigInterface, QUILL_CONFIG } from 'ngx-quill-wrapper';

import { AppComponent } from './app.component';

const DEFAULT_QUILL_CONFIG: QuillConfigInterface = {
};

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    QuillModule,
    BrowserModule,
    FlexLayoutModule
  ],
  exports: [
  ],
  providers: [
    {
      provide: QUILL_CONFIG,
      useValue: DEFAULT_QUILL_CONFIG
    }
  ]
})
export class AppModule {}
