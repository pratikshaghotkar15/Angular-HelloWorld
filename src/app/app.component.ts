import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h1>welcome {{name}} binding data class to template</h1>
  <h2>
  Welcome Vishwas (Static data)
  </h2>
  <h2>{{2+2}}</h2>
   <h2>{{"welcome  "+name}}</h2>
    <h2>{{name.length}}</h2>
	 <h2>{{name.toUpperCase()}}</h2>
      <h2>{{greetUser()}}
  <h2>{{siteUrl}}</h2>
  
  Property Binding 
  <input [id]="myId" type="text" value="vishwas">
  <input disabled="true" id="{{myId}}" type="text" value="vishwas">
  <input [disabled]="false" id="{{myId}}" type="text" value="vishwas">
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="vishwas" >
  <br>
  
  
  class binding
  <h2 class="text-success">Codevolution</h2>
  <h2 [class]="successclass">Codevolution</h2>
  <h2 class="text-special" [class]="successclass">Codevolution</h2>
  <h2 [class.text-danger]="hasError">Codevolution</h2>
  
  <h2 [ngClass]="messageClasses">codevolution</h2>
  
  <br>
  <br>
  <h2 [style.color]="'orange'">Style Binding </h2>
  <h2 [style.color]="hasError ? 'red':'green'">Style Binding</h2>
  <h2 [style.color]="highlightcolor">Style Binding</h2>
  <h2 [ngStyle]="titleStyles">Style Binding</h2>
  
  <button (click)="onClick()">Greet</button><br>
  
  {{greeting}}
  
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>
  
  
  `,
  styles: [`
  .text-success{
  color:green;
  }
  .text-danger{
  color:red;
  }
  .text-special{
  font-style:italic;
  }
  
  
  `
  
  ]
})
export class AppComponent {
  title = 'hello-world';
  public name="sonu";
  public siteUrl=window.location.href;
  
  
  public myId="testId";
  public isDisabled=true;
  
  public name1="codevolution";
  public successclass="text-success";
  public hasError=false;
  
  //for multiple classes
  public isSpecial=true;
  public messageClasses={
  "text-success":this.hasError,
  "text-danger":this.hasError,
  "text-special":this.isSpecial
  
 }
 //style binding
 public highlightcolor="orange";
  //for multiple style binding
 public titleStyles={
 "color":"purple",
 "font-style":"italic"
 }
 
 //event binding
 public greeting="";
onClick(){
console.log('Welcome to codevolution');
this.greeting='Welcome to codevolution';
}


//TRV
 logMessage(value:any){
 console.log(value);
 }

 

  ngOnInit(){}
  greetUser(){
  return "Hello  "+this.name;
  }
}
