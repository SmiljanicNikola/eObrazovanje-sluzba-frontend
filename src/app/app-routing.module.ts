import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {AppComponent} from './app.component'
import { StudentiComponent } from './components/studenti/studenti.component';
import { LecturersComponent } from './components/lecturers/lecturers.component';
import { SubjectsComponent } from './components/subjects/subjects/subjects.component';
import { SemesterComponent } from './components/semesters/semesters.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { BankAccountDetailsComponent } from './components/bank-account-details/bank-account-details.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { ExamDatesComponent } from './components/exam-dates/exam-dates.component';
import { HomeComponent } from './components/home/home.component';
import { LecturersExamsComponent } from './components/lecturers-exams/lecturers-exams.component';
import { UpdateExamComponent } from './components/update-exam/update-exam.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { CreateLecturerComponent } from './components/create-lecturer/create-lecturer.component';
import { UpdateLecturerComponent } from './components/update-lecturer/update-lecturer.component';
import { AdminComponent } from './components/admin/admin.component';
import { DepartmentComponent } from './components/departments/departments.component';
import { UpdateDepartmentsComponent } from './components/update-departments/update-departments.component';
import { CreateDepartmentsComponent } from './components/create-departments/create-departments.component';
import { CreateExamDateComponent } from './components/create-exam-date/create-exam-date.component';
import { SubjectPerformanceComponent } from './components/subject-performance/subject-performance.component';
import { StudentSubjectComponent } from './components/student-subject/student-subject.component';
import { CreateSemestersComponent } from './components/create-semester/create-semester.component';
import { GuardService as AuthGuard } from './services/auth/guard.service';
import { UpdatePreExamObligatinComponent } from './components/update-pre-exam-obligatin/update-pre-exam-obligatin.component';
import { PreExaminationObligationsComponent } from './components/pre-examination-obligations/pre-examination-obligations.component';
import { ErrorPageComponent } from './components/404/404.component';
import { AttendingCourseComponent } from './components/attending-course/attending-course.component';
import { UpdateSemesterComponent } from './components/update-semesters/update-semester.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'login'},
  {path: 'login', component: LoginComponent },
  {path: 'studenti', component: StudentiComponent,
         canActivate:[AuthGuard],
         data: { 
          expectedRole: ['LECTURER', 'STUDENT', 'ADMIN']
        }},
        {path: 'admins', component: AdminComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {path: 'addAdmin', component: CreateAdminComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {path: 'choseStudent/:id', component:StudentSubjectComponent,
    canActivate:[AuthGuard],
    data: {
    expectedRole: 'ADMIN'
  }
  },
  
  {path: 'addStudent', component: CreateStudentsComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {path: 'updateStudent', component: UpdateStudentComponent,
        canActivate:[AuthGuard],
        data: {
          expectedRole: ['STUDENT','ADMIN']
        }
  },

  {path: 'studentDetails/:id', component: StudentDetailsComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: ['STUDENT','ADMIN']
    }
  },
  
  {path: 'updateStudent/:id', component: UpdateStudentComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: ['STUDENT','ADMIN']
    }
  },

  {path: 'subject-performance', component:SubjectPerformanceComponent,
        canActivate:[AuthGuard],
        data: {
          expectedRole: 'ADMIN'
        }
  },
  
  {path: 'lecturers', component: LecturersComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {path: 'addLecturer', component: CreateLecturerComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {path: 'updateLecturer/:id', component: UpdateLecturerComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: "ADMIN"
    }
  },
  {path: 'subjects', component: SubjectsComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: ['STUDENT','ADMIN']
    }
  },
  {path: 'semesters', component: SemesterComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {path: 'payments', component: PaymentsComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'STUDENT'
    }
  },

  {path: 'bankAccountDetails/:id', component: BankAccountDetailsComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: ['STUDENT','ADMIN']
    }
  },
  {path: 'paymentHistory/:id', component: PaymentHistoryComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'STUDENT'
    }
  },
  {path: 'examDates', component: ExamDatesComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: ['LECTURER', 'STUDENT', 'ADMIN']

    }
  },
  {path: 'home', component: HomeComponent},
  {path: 'lecturersTakenExam', component:LecturersExamsComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'LECTURER'
    }
  },
  {path: 'updateExam/:id', component: UpdateExamComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: ['LECTURER', 'ADMIN']
    }
  },
  {path: 'departments', component: DepartmentComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {path: 'updateDepartment/:id', component: UpdateDepartmentsComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {path: 'createDepartment', component: CreateDepartmentsComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {path: 'prexam', component: PreExaminationObligationsComponent,
    canActivate:[AuthGuard],
    data:{
      expectedRole: ['ADMIN', 'LECTURER', 'STUDENT'] 
    }
  },

  {path: 'changePassword/:id', component: ChangePasswordComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: ['ADMIN', 'LECTURER', 'STUDENT']
    }
  },
  {path: 'updateProfile/:id', component: UpdateProfileComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: ['ADMIN', 'LECTURER', 'STUDENT']
    }
  },
  {path: 'addExamDate', component: CreateExamDateComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: ['ADMIN', 'LECTURER']
    }
  },
  
  {path: 'updatePreExamObligation/:id', component: UpdatePreExamObligatinComponent,
  canActivate:[AuthGuard],
    data: {
      expectedRole: ['ADMIN', 'LECTURER', 'STUDENT']
    }
  },
  {path: 'updatePreExamObligation', component: UpdatePreExamObligatinComponent,
  canActivate:[AuthGuard],
    data: {
      expectedRole: ['ADMIN', 'LECTURER', 'STUDENT']
    }
  },
  {path: 'changePassword/:id', component: ChangePasswordComponent},
  {path: 'updateProfile/:id', component: UpdateProfileComponent},
  {path: 'addExamDate', component: CreateExamDateComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'LECTURER'
    }
  },
  {path: 'createSemester', component: CreateSemestersComponent,
    canActivate:[AuthGuard],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {path: 'updateSemester/:id', component: UpdateSemesterComponent,
  canActivate:[AuthGuard],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {path: 'attending-course', component: AttendingCourseComponent,
        canActivate:[AuthGuard],
        data: {
          expectedRole: 'ADMIN'
        }
  },

  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }