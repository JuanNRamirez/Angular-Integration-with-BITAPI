import { Component, OnInit } from '@angular/core';
import { StudentsServiceService } from '../../services/students-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Students } from 'src/app/models/students';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  public student: Students;
  public userID;

  constructor(private studentService: StudentsServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userID = this.activatedRoute.snapshot.paramMap.get('id');
    this.getSpecificStudent(this.userID);
  }

  editStudent(student) {
    this.studentService.updateStudent(student._id, student).subscribe(
      (response: any) => {
        if (response.userData) {
          alert("Estudiante actualizado con exito!");
          this.router.navigate(['/view']);
        } else {
          alert("No fue posible actualizar el estudiante");
        }
      },
      (error) => {
        if (error != null) {
          console.log(error);
        }
      }
    );
  }

  getSpecificStudent(studentID) {
    this.studentService.obtainStudentByID(studentID).subscribe(
      (response: any) => {
        this.student = response.studentData;
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
