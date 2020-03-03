import { Component, OnInit } from '@angular/core';
import { RInformation } from './Information';
import { Register } from './register';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'form';
  rgData: RInformation[];
  Done:boolean;
  maxDate = new Date();
  
  public infoData: Register;
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    console.log();
    // tslint:disable-next-line: no-unused-expression
    this.rgData = [];
    

    

  }
  onSubmit() {
    console.log('this is info');
    console.log(this.rgData);
    
    console.log(this.rgData);
  }

}
