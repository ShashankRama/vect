import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimationService } from 'atft';

@Component({
  selector: 'app-editor-canvas',
  templateUrl: './editor-canvas.component.html',
  styleUrls: ['./editor-canvas.component.scss']
})
export class EditorCanvasComponent implements OnInit {

  @Input() yaml = ``;

  @Output() editorToggle = new EventEmitter<void>();

  constructor(private animation: AnimationService) {
    this.animation.start();
  }

  ngOnInit(): void {
  }

  public mouseEnter(): void {
    console.log('mouseEnter');
  }

  public click(): void {
    console.log('click');
  }

  public mouseExit(): void {
    console.log('mouseExit');
  }

}