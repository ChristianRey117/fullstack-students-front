import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardStudentComponent } from './components/card-student/card-student.component';
import { StudentService } from './services/student.service';
import { take, tap } from 'rxjs';
import {
  HttpClient,
  HttpClientModule,
  provideHttpClient,
} from '@angular/common/http';
import { IStudent } from './interfaces/IStudent';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    CardStudentComponent,
    CardStudentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'fullstack-students-front';
  students: IStudent[];
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  constructor(private readonly _studentService: StudentService) {}

  ngOnInit(): void {
    this._studentService
      .getAllStudents()
      .pipe(
        take(1),
        tap((students) => {
          console.log(students);
          this.students = students;
        })
      )
      .subscribe();

    console.log(this.form);
  }

  saveStudent(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      this._studentService
        .saveStudent(this.form.value)
        .pipe(
          take(1),
          tap((response) => {
            console.log(response);
          })
        )
        .subscribe();
    } else {
      this.form.markAsTouched();
      this.form.markAsDirty();
    }
  }
}
