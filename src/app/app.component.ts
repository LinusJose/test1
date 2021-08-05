import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Str=""
  public str1=""
  public count=0;
  public EorO="Even";
  public sum=0;
  public count3=0
  public str4=""
  public is_hidden=true;
public fruits=[
  {"name":"orange","price":122},
  {"name":"apple","price":78}
]

ngOnInit(){

}
data={
  tech1:"angular",
  tech2:"css"
}

fnCalling(){
  console.log("buttonn clicked");
  
  this.Str="hey Friends";

}
 fn1Calling(){
this.str1="friends"
 }
 count1(){
   this.count=this.count+1;
   if(this.count%2==0){
     this.EorO="Even";
   }
   else{
     this.EorO="odd"
   }
 }
 count2(){
   this.count-=1;
   
   
 }
 add(){
   this.sum=this.count+this.count;
 }
 clear(){
   this.is_hidden=true;
 }
 check(){
   this.is_hidden=false
   if(this.count3 % 2==0)
   {
     this.str4="even";

   }
   else{
     this.str4="odd";
   }
 }
 
}