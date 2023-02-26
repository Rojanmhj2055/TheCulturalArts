import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.css']
})
export class SiteFooterComponent implements OnInit {
  @HostBinding("style.--color")
  @Input() color : String;
  ph_number: String;
  email: String;
  constructor() {
    this.color = "#252525";
    this.ph_number="+977-982000220";
    this.email = "sanu@gmail.com";
   }

  ngOnInit(): void {
  }

}
