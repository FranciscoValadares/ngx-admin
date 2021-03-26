import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TinyMceService {
  // valor:any = "Valor Inicial";
  constructor() { }

  valor:any = `<h2>The world’s first rich text editor in the cloud</h2>

  <p>
    Have you heard about Tiny Cloud? 
    It’s the first step in our journey to help you deliver great content creation experiences, no matter your level of expertise. 
    50,000 developers already agree. 
    They get free access to our global CDN, image proxy services and auto updates to the TinyMCE editor. 
    They’re also ready for some exciting updates coming soon.
  </p>


  <p>
    One of these enhancements is <strong>Tiny Drive</strong>: imagine file management for TinyMCE, in the cloud, made super easy. 
    Learn more at <a href='https://www.tinymce.com/tinydrive/'>tinymce.com/tinydrive</a>, where you’ll find a working demo and an opportunity to provide feedback to the product team.
  </p>

  <h3>An editor for every project</h3>

  <p>
    Here are some of our customer’s most common use cases for TinyMCE:
    <ul>
      <li>Content Management Systems (<em>e.g. WordPress, Umbraco</em>)</li>
      <li>Learning Management Systems (<em>e.g. Blackboard</em>)</li>
      <li>Customer Relationship Management and marketing automation (<em>e.g. Marketo</em>)</li>
      <li>Email marketing (<em>e.g. Constant Contact</em>)</li>
      <li>Content creation in SaaS systems (<em>e.g. Eventbrite, Evernote, GoFundMe, Zendesk</em>)</li>
    </ul>
  </p>

  <p>
    And those use cases are just the start. 
    TinyMCE is incredibly flexible, and with hundreds of APIs there’s likely a solution for your editor project. 
    If you haven’t experienced Tiny Cloud, get started today. 
    You’ll even get a free trial of our premium plugins – no credit card required!
  </p>`;
}
