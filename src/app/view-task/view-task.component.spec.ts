import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTaskComponent } from './view-task.component';
import { fakeBackendProvider, Interceptor } from '../interceptor/interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {DataTableModule} from 'primeng/datatable';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { TaskService } from '../services/task.service';
import { DatePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import {GrowlModule} from 'primeng/growl';
import { Task } from 'src/app/entities/task';
import { DataTransferService } from 'src/shared/data-transfer.service';


describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTaskComponent],
      imports: [RouterTestingModule, ReactiveFormsModule, 
        HttpClientModule, FormsModule, DataTableModule, GrowlModule,
        FormsModule, ConfirmDialogModule, BrowserAnimationsModule],
      providers: [TaskService, DataTransferService, DatePipe, {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
      }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('View Tasks Test Cases', () =>
  {
    it('Tasks should be zero or more',()=> {
      component.ngOnInit();
      console.log(component.tasks);
      expect(component.tasks.length).toBeGreaterThanOrEqual(0);
    });

    it('On success  should return a message', () => { 
      component.showMessage(true,"Sucess!");
      expect(component.msgs.length).toBeGreaterThanOrEqual(1); 
    });

    it('On error  should return a message', () => { 
      component.showMessage(false,"Error occured!");
      expect(component.msgs.length).toBeGreaterThanOrEqual(1); 
    });

    /*
    it('After endTask there should be atleast one item in the list ', (done) => {debugger; 
      component.endTask(task);
      component.confirmDialog.accept();
      let confirmed = spyOn(taskService, 'endTask').and.returnValue(Promise.resolve(true));
      confirmed.calls.mostRecent().returnValue.then( () => {
        fixture.detectChanges();
        expect(component.tasks.length).toBeGreaterThanOrEqual(1);
      })
       
    });
    */

  });

  let task : Task = {
    "taskId": 2,
    "taskName": "sub Task1",
    "parentId": 1,
    "parent": {
      "parentId": 1,
      "parentTaskName": "main Task2"
    },
    "startDate": new Date("2018-01-01"),
    "endDate": new Date("2018-01-01"),
    "priority": 10,
    "status": true,
    "projectId": 2,
    "userId": 2,
    "project": {
      "projectId": 2,
      "projectName": "Project 3",
      "startDate": new Date("2018-01-01"),
      "endDate": new Date("2018-01-01"),
      "priority": 18,
      "managerId": 1,
      "projectManager": null,
      "status": "Active"
    },
    "user": {
      "userId": 2,
      "firstName": "kevin",
      "lastName": "timm",
      "employeeId": 123456,
      "projectId": null,
      "taskId": null,
      "userProject": null,
      "userTask": null,
      "isDeleted": false
    }
  };

});
