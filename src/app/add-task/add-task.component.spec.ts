import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTaskComponent } from './add-task.component';
import { fakeBackendProvider, Interceptor } from '../interceptor/interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SliderModule} from 'primeng/slider';
import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { TaskService } from '../services/task.service';
import { DatePipe } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Task } from 'src/app/entities/task';
import { Router } from '@angular/router';
import { Project } from 'src/app/entities/project';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user.service';
import { ProjectService } from 'src/app/services/project.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import {DataTableModule} from 'primeng/datatable';
import {GrowlModule} from 'primeng/growl';


describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [AddTaskComponent],
      imports: [RouterTestingModule, ReactiveFormsModule, DataTableModule, GrowlModule,
        HttpClientModule, FormsModule, SliderModule, CalendarModule,
        FormsModule, ConfirmDialogModule, BrowserAnimationsModule],
      providers: [TaskService, ProjectService, UserService, DatePipe, {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
      }]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Add/Edit Task Test Cases', () =>
  {
    it('parentTasks should be zero or more after ngOnInit',()=> {
      component.ngOnInit();
      expect(component.parentTasks.length).toBeGreaterThanOrEqual(0);
    });

    it('usersList should be zero or more after ngOnInit',()=> {
      component.ngOnInit();
      expect(component.usersList.length).toBeGreaterThanOrEqual(0);
    });

    it('projectsList should be zero or more after ngOnInit',()=> {
      component.ngOnInit();
      expect(component.projectsList.length).toBeGreaterThanOrEqual(0);
    });

    it('Test editMode()',()=> {
      component.editMode();
      expect(component.formMode).toBe('Edit Task');
      expect(component.btnMode).toBe('Update');
    });

    it('Test addMode()',()=> {
      component.addMode();
      expect(component.formMode).toBe('Add Task');
      expect(component.btnMode).toBe('Add');
    });

    it('Test resetData()',()=> {
      component.ngOnInit();
      expect(component.isParentTask).toBe(false);
    });

    


  });

});
