import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Upload } from './upload';
import { UploadService } from './upload.service';

@Component({
  selector: 'ng-upload-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  file: File | null | undefined;

  upload$: Observable<Upload> = EMPTY;

  constructor(private uploads: UploadService) {}

  onFileInput(files: FileList | null): void {
    if (files) {
      this.file = files.item(0);
    }
  }

  onSubmit() {
    if (this.file) {
      this.upload$ = this.uploads
        .upload(this.file);
    }
  }
}
