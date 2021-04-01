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
      template_replace_values: {
        username : 'Jack Black',
        staffid : '991234'
      }, 

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
      font_formats: "Andale Mono=andale mono,times; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Oswald=oswald; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Terminal=terminal,monaco; Times New Roman=times new roman,times; Trebuchet MS=trebuchet ms,geneva; Verdana=verdana,geneva; Webdings=webdings; Wingdings=wingdings,zapf dingbats",

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
