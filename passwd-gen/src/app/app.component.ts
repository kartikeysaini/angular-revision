import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'


})
export class AppComponent {
  length = 0
  password = ""
  includeLetters = false
  includeNumbers = false
  includeSymbols = false

  onChangeLength(value:any){
    let lengthVal = ''
    lengthVal += value.target.value
    console.log(lengthVal)
    const parsedVal = parseInt(lengthVal)
    console.log(parsedVal, typeof(parsedVal))
    if(!isNaN(parsedVal)){
      this.length = parsedVal
    }
    

    // console.log(this.length)
  }

  onButtonClick(){
    
    const numbs="0123456789"
    const letts = "abcdefghijklmnopqrstuvwxyz"
    const symb = "!@#$%^&*()_+"

    let allowedVal = ""

    if(this.includeLetters)
      allowedVal += letts
    if(this.includeNumbers)
      allowedVal += numbs
    if(this.includeSymbols)
      allowedVal += symb

    let generatedPassword = ""
    for(let i = 0;i<this.length;i++){
      let index = Math.floor(Math.random() * allowedVal.length)
      generatedPassword += allowedVal[index]
    }

    this.password = generatedPassword

  }

  getPassword(){
    return this.password
  }

  onChangeUseLetters(){
    return this.includeLetters = !this.includeLetters
  }

  onChangeUseSymbols(){
    return this.includeSymbols = !this.includeSymbols
  }

  onChangeUseNums(){
    return this.includeNumbers = !this.includeNumbers
  }

  

}
