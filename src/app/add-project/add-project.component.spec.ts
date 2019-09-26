import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProjectComponent } from './add-project.component';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/entities/project';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user.service';
import { fakeBackendProvider, Interceptor } from '../interceptor/interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { DatePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import {DataTableModule} from 'primeng/datatable';
import {GrowlModule} from 'primeng/growl';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DataTransferService } from 'src/shared/data-transfer.service';


describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AddProjectComponent],
      imports: [RouterTestingModule, ReactiveFormsModule, DataTableModule, GrowlModule,
        HttpClientModule, FormsModule, FormsModule, ConfirmDialogModule, BrowserAnimationsModule,
        CalendarModule, SliderModule],
      providers: [UserService, ProjectService, DataTransferService, DatePipe, {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
      }]

    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Add Project test cases', () => {

    it('On init  project grid should have zero or more list items', () => {
      component.ngOnInit();
      component.addProjectReset();
      expect(component.projectsList.length).toBeGreaterThanOrEqual(0);
    });
    it('On reset button text is ADD', () => {
      component.formInit();
      component.addProjectReset();
      expect(component.addOrUpdateBtn)
        .toEqual('Add');
    });
    it('On update button text is update', () => {
      component.updateProject(project);
      expect(component.addOrUpdateBtn)
        .toEqual('Update');
    });
    it('Uncheck set date when date is null', () => {
      project.startDate=null;
      project.endDate=null;
      component.updateProject(project);
      expect(component.addProjectForm.get('checkDatesControl').value)
        .toBe(false);
    });

    it('On submit  message should be shown', () => {
      component.formInit();
      component.addProjectSubmit();
      expect(component.msgs.length).toBeGreaterThanOrEqual(0);
    });
    it('On error  should return a message', () => {
      component.formInit();
      component.showMessage(false, "Error occured!");
      expect(component.msgs.length)
        .toBeGreaterThanOrEqual(0);
    });

  });

  let project : Project=
  {
    "projectId": 1,
    "projectName": "Project1",
    "startDate": new Date("2019-06-25"),
    "endDate": new Date("2019-06-26"),
    "priority": 10,
    "managerId": 1,
    "projectManager": {
      "userId": 1,
      "firstName": "Sridharrajan",
      "lastName": "K",
      "employeeId": 416812,
      "projectId": null,
      "taskId": null,
      "userProject": null,
      "userTask": null,
      "isDeleted": false
    },
    "status": "Active"
  }
});
