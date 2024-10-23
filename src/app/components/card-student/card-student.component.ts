import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { IStudent } from '../../interfaces/IStudent';

@Component({
  selector: 'app-card-student',
  standalone: true,
  imports: [CardModule],
  templateUrl: './card-student.component.html',
  styleUrl: './card-student.component.scss',
})
export class CardStudentComponent {
  @Input() student: IStudent;
}
