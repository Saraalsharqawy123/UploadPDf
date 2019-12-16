import { Injectable } from '@angular/core';
import { FileTransfer, FileTransferObject } from "@ionic-native/file-transfer/ngx";
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Injectable({
  providedIn: 'root'
})
export class ViewBookService {

  fileTransfer: FileTransferObject;
  //fileUrl;
  //fileName;
  //fileType;
  //fileMIME;
  //MIMEType=[{"type":"pdf","mime":'application/pdf'},{"type":"docx","mime":'application/vnd.openxmlformats-officedocument.wordprocessingml.document'}];
  
  



  constructor(private transfer: FileTransfer,private fileChooser: FileChooser){}
  //constructor(private filePath: FilePath,private fileChooser: FileChooser,private transfer: FileTransfer,private file: File) {}


  /*
  Download()
  {
    //this function for Choose file from mobile device.
    this.Choose().then(url=>{

  
        this.filePath.resolveNativePath(url)
        .then(Path => {
  
          
          //application/vnd.openxmlformats-officedocument.wordprocessingml.document
          //'application/pdf'
          this.fileName   = Path.substring(Path.lastIndexOf("/") + 1);
        
          

         
      //use file transfer to download file in app 
      this.fileTransfer.download(url, this.file.dataDirectory+"Books/" +
      this.fileName).then(entry => {
        //alert("file saved in :"+entry.toURL());
      
      }),(err=>{
        alert(JSON.stringify(err));
      });
  
    }).catch(e => alert("error"));

  
  })    
    
  }
*/
  //this function for Choose file from mobile device.
  Choose()
  { 
    
    this.fileTransfer = this.transfer.create();
    return this.fileChooser.open();    
  }
/*
 Open()
 {
   this.Choose().then(url=>{
    
    //use file Path to get relative path and enable open document
    this.filePath.resolveNativePath(url)
      .then(Path => {

        //steps 
        //1. if no app to open folder must say to user that and ectare7 apps to install

        //application/vnd.openxmlformats-officedocument.wordprocessingml.document
        //'application/pdf'
        this.fileName   = Path.substring(Path.lastIndexOf("/") + 1)
        this.fileType   = this.fileName.substring(this.fileName.lastIndexOf(".") + 1)
      
       
        this.fileMIME=this.MIMEType.find(type=>{ return type.type==this.fileType});

        /*
          this.fileOpener.showOpenWithDialog(Path,this.fileMIME.mime).then(res=>{
        },(err)=>{
          alert(JSON.stringify(err))
          const options: DocumentViewerOptions = {
            title: 'My PDF'
          }
          
          this.doc.viewDocument(Path,this.fileMIME, options);
        })
      
      
      .catch(err => console.log(err));

      })
   
 }
 */
}





