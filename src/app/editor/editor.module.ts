import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {EditorCanvasComponent} from './editor-canvas/editor-canvas.component';
import {EditorContentComponent} from './editor-content/editor-content.component';
import {EditorLayoutComponent} from './editor-layout/editor-layout.component';
import {EditorSideComponent} from './editor-side/editor-side.component';
import {EditorToolbarComponent} from './editor-toolbar/editor-toolbar.component';
// import {AnimationService, AtftModule, RendererService, StatsService, AtftDataCenterActorModule} from 'atft';

@NgModule({
  imports: [
    CommonModule,
    // AtftModule,
    // AtftDataCenterActorModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    EditorLayoutComponent,
    EditorContentComponent,
    EditorToolbarComponent,
    EditorSideComponent,
    EditorCanvasComponent
  ],
  exports: [
    EditorLayoutComponent,
    EditorContentComponent,
    EditorToolbarComponent
  ],
  providers: [
    // AnimationService,
    // RendererService,
    // StatsService
  ]
})
export class EditorModule {
}
