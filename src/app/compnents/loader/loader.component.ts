import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mrk-preloader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {

  @Input() width: any;
  @Input() height: any;
  @Input() radius: any;
  styles: any = {};
  
  constructor() { }

  
  ngOnInit() {
    this.styles = {
      width: this.width ? this.width : '100%',
      height: this.height ? this.height : '16px'
    }

    if (typeof this.radius !== 'undefined' && this.radius !== '') {
      this.styles.borderRadius = this.radius;
    }
  }

}
