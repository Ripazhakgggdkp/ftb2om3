import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { parse } from 'id3-parser';
import { convertFileToBuffer, fetchFileAsBuffer } from 'id3-parser/lib/universal/helpers';
import universalParse from 'id3-parser/lib/universal';
import * as nearley from 'nearley';
import * as ftbair from '../grammars/ftbAir';


import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { IID3Tag } from 'id3-parser/lib/interface';


interface Difficulty {
  parser: string;
  file: File;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mp3Form: FormGroup;

  quote: string;
  isLoading: boolean;
  mp3: File = null;
  difficulties: Array<Difficulty>;

  private title: AbstractControl;
  private unicodeTitle: AbstractControl;
  private artist: AbstractControl;
  private unicodeArtist: AbstractControl;
  private creator: AbstractControl;
  private source: AbstractControl;

  constructor(private fb: FormBuilder) {
    this.mp3Form = this.fb.group({
      title: '',
      unicodeTitle: '',
      artist: '',
      unicodeArtist: '',
      creator: '',
      source: '',
    });

    this.title = this.mp3Form.get('title');
    this.unicodeTitle = this.mp3Form.get('unicodeTitle');
    this.artist = this.mp3Form.get('artist');
    this.unicodeArtist = this.mp3Form.get('unicodeArtist');
    this.creator = this.mp3Form.get('creator');
    this.source = this.mp3Form.get('source');

  }

  ngOnInit() {
    this.isLoading = true;
    this.difficulties = new Array<Difficulty>();
  }

  onMp3Added(files: FileList) {
    this.mp3 = files.item(0);
    convertFileToBuffer(this.mp3).then(parse).then(tag => {
      const id3 = <IID3Tag>tag;
      this.title.setValue(id3.title);
      this.unicodeTitle.setValue(id3.title);
      this.unicodeTitle.setValue(id3.title);
      this.artist.setValue(id3.artist);
      this.unicodeArtist.setValue(id3.artist);
    });
  }

  onDifficultyAdded(files: FileList) {
    this.difficulties.push({ file: files.item(0), parser: 'ftbair' });
    const ftbair_parser = new nearley.Parser(nearley.Grammar.fromCompiled(ftbair));
    const reader = new FileReader();
    reader.readAsText(files.item(0));
    reader.onload = (e) => {
      console.log("AS");
      const text = reader.result;
      ftbair_parser.feed(text);
      console.log(ftbair_parser.results[0]);
    };
  }
}
