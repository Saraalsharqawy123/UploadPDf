import { Component } from '@angular/core';
import { ViewBookService } from '../view-book.service';
import { FilePath } from '@ionic-native/file-path/ngx';

import { File } from "@ionic-native/file/ngx";
import { Base64 } from '@ionic-native/base64/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  bookurl;
  files=[];
  SelectedBook=null;
  base64files;
  Base: string;

  constructor(private base64: Base64,private Book:ViewBookService,private filePath: FilePath,private file: File) {

    this.file.checkDir(`${this.file.dataDirectory}`,"Books").then(res=>{
      //alert("there is" );
      this.loadDocuments();
    },no=>{
      //create folder in phone app
    this.file.createDir(
      `${this.file.dataDirectory}`,
      "Books",
      false
    )
     // alert("no file");
    })
    
            
  }


  Download()
  {
    //this function for Choose file from mobile device.
    this.Book.Choose().then(url=>{

  
        this.filePath.resolveNativePath(url)
        .then(Path => {
  
          
          //application/vnd.openxmlformats-officedocument.wordprocessingml.document
          //'application/pdf'
          let fileName   = Path.substring(Path.lastIndexOf("/") + 1);
        
          

         
      //use file transfer to download file in app 
      this.Book.fileTransfer.download(url, this.file.dataDirectory+"Books/" +
      fileName).then(entry => {
        //alert("file saved in :"+entry.toURL());
        
        
        this.loadDocuments();
      }),(err=>{
        alert(JSON.stringify(err));
      });
  
    }).catch(e => alert("error"));

  
  })    
    
  }

  


 // list document in app
   loadDocuments(){
     
  this.file.listDir(this.file.dataDirectory,"Books/").then(res => {
    this.files =res;
  });

  }




//to view pdf
Open(url)
{
  /*
this.Book.Choose().then(url =>{
*/
  this.filePath.resolveNativePath(url)
  .then(Path => {

  //to base 64 
  this.base64.encodeFile(Path).then((base64File: string) => {
    
    //to uniarray
    this.bookurl= this.base64TouniArray(base64File);
    this.SelectedBook=true;
  }).catch((err) => {
    this.Base= JSON.stringify(err);
  });

  })

}


//function to convert base64 to UniArray
base64TouniArray(dataURI) {
  var BASE64_MARKER = ';base64,';

  var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  
  for(var i = 0; i < rawLength; i++) {
    array[i] = raw.charCodeAt(i);
  }
  return array;
}

}

