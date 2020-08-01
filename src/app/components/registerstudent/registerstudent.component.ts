import { Component, OnInit } from '@angular/core';
import { Students } from '../../models/students';
import { StudentsServiceService } from '../../services/students-service.service'

@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.css']
})
export class RegisterstudentComponent implements OnInit {

  public registeredStudent: Students;

  constructor(private studentService: StudentsServiceService) {
    this.registeredStudent = new Students("", "", "", NaN, NaN);
   }

  ngOnInit(): void {
  }

  addStudent() {
    this.studentService.createStudent(this.registeredStudent).subscribe(
      (response: any) => {
        let students = response.userData;
        this.registeredStudent = students;
        if (!this.registeredStudent._id) {
          alert("Error al registrar estudiante.");
        } else {
          alert(`Registro exitoso! ${this.registeredStudent.firstName} ha sido ingresado.`);
          this.registeredStudent = new Students("", "", "", NaN, NaN);
        }
      },
      (error) => {
        var errorMessage = <any> error;
        if (errorMessage != null) {
          console.log(error);
        }
      }
    );
  }
}
