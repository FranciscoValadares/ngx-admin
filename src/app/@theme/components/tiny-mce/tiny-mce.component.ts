import { Component, OnDestroy, AfterViewInit, Output, EventEmitter, ElementRef, OnChanges } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { TinyMceService } from 'app/@core/utils';

@Component({
  selector: 'ngx-tiny-mce',
  template: '',
})
export class TinyMCEComponent implements OnChanges, OnDestroy, AfterViewInit {

  @Output() editorKeyup = new EventEmitter<any>();

  editor: any;
  html = '';

  constructor(
    private host: ElementRef,
    private locationStrategy: LocationStrategy,
    public  tinyMceService: TinyMceService,
  ) { 
    // this.editor.contentDocument.querySelector('#tinymce').innerText = this.tinyMceService.valor;
  }

  ngAfterViewInit() {
    tinymce.init({
      // selector: 'textarea',
      target: this.host.nativeElement,
      plugins: ['link', 'paste', 'table'],
      skin_url: `${this.locationStrategy.getBaseHref()}assets/skins/lightgray`,
      element_format : 'html',     

      setup: editor => {
        this.editor = editor;
        this.editor.content = this.tinyMceService.valor;
        
        // this.editor.initialValue=
        editor.on('keyup', () => {
          this.editorKeyup.emit(editor.getContent());
          this.tinyMceService.valor =  editor.getContent();
          
        });
      },
      height: '320',
    });
    this.editor.contentDocument.querySelector('#tinymce').innerHTML = this.tinyMceService.valor;
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  ngOnChanges() {
    //this.editor.contentDocument.querySelector('#tinymce').innerHTML = this.tinyMceService.valor;
    this.tinyMceService.valor = this.editor.contentDocument.querySelector('#tinymce').innerHTML 
  }


}
