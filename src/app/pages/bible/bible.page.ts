import { HttpClient} from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-bible',
  templateUrl: './bible.page.html',
  styleUrls: ['./bible.page.scss'],
})
export class BiblePage implements OnInit {
 
  constructor(private http:HttpClient) {}

  bibleData: any= [];
  dataVerses: any=[];
   runHttp(){
    this.http.get('https://bible-api.com/john 3:1-36')
    .subscribe(data => {
      console.log(data);
      this.bibleData=data;
      this.dataVerses=this.bibleData['verses'];
      
      //console.log(this.bibleData['reference']);
      //console.log(this.bibleData['text']);
      //console.log(this.dataVerses['book_name']);
    });

   }

  ngOnInit() {
    this.runHttp();
  }

}
