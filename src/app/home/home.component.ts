import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { parse } from 'id3-parser';
import { convertFileToBuffer, fetchFileAsBuffer } from 'id3-parser/lib/universal/helpers';
import universalParse from 'id3-parser/lib/universal';


import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  mp3: File = null;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }

  onMp3Change(files: FileList) {
    console.log("OAIFJOAIJ");
    this.mp3 = files.item(0);
    convertFileToBuffer(this.mp3).then(parse).then(tag => {
      console.log(tag);
    });
  }
}
