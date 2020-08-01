import { Component, OnInit } from '@angular/core';
import { StudentsServiceService } from '../../services/students-service.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  public foundStudents: any = [];

  constructor(private studentService: StudentsServiceService) { }

  ngOnInit(): void {
    this.showStudents();
  }

  showStudents() {
    this.studentService.obtainStudents().subscribe(
      (response: any) => {
        this.foundStudents = response.studentData;
      },
      (error) => {
        var errorMessage = <any> error;
        if (errorMessage != null) {
          console.log(error);
        }
      }
    );
  }

  eliminateStudent(studentID) {
    this.studentService.deleteStudent(studentID).subscribe(
      (response: any) => {
        if (response.userData) {
          alert("Estudiante eliminado con exito!");
          this.showStudents();
        } else {
          alert("No fue posible eliminar al estudiante");
        }
      },
      (error) => {
        if (error != null) {
          console.log(error);
        }
      }
    );
  }

}
