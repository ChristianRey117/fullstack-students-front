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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    CommonModule,
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
  }
}
