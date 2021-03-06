import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editor-layout',
  templateUrl: './editor-layout.component.html',
  styleUrls: ['./editor-layout.component.scss']
})
export class EditorLayoutComponent implements OnInit {

  id: string;

  constructor(protected activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => {
      // console.log('EditorLayoutComponent.activatedRoute');
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
  }

}
