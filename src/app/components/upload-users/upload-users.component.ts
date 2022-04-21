import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-upload-users',
  templateUrl: './upload-users.component.html',
  styleUrls: ['./upload-users.component.css']
})
export class UploadUsersComponent implements OnInit {

  uploadForm: FormGroup;  

  constructor(private formBuilder: FormBuilder, private studentService:StudentService) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      file: ['']
    });
  }

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file')?.setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file')?.value);

    this.studentService.uploadStudents(formData).subscribe(data => {console.log(formData)});
  }
}
