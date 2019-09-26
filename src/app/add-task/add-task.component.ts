import { Component, OnInit } from '@angular/core';
import { ParentTask, Task } from 'src/app/entities/task';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { TaskService } from 'src/app/services/task.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { isDefaultChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
import { ViewChild } from '@angular/core/src/metadata/di';
import { DataTransferService } from 'src/shared/data-transfer.service';
import { Project } from 'src/app/entities/project';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user.service';
import { ProjectService } from 'src/app/services/project.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [TaskService, DatePipe, DataTransferService]
})
export class AddTaskComponent implements OnInit {
  parentTasks: ParentTask[]=[];
  taskId: Number = 0;
  formMode: String = 'Add Task';
  btnMode: String = 'Add';
  addTaskForm: FormGroup;
  errorMessage: any;
  isParentTask: boolean = false;
  loaded: boolean=false;
  task : Task;
  projectsList: Project[]=[];
  usersList:User[]=[];

  constructor
  (
    private router: Router,
    private taskService: TaskService,
    private datePipe: DatePipe,
    private route: ActivatedRoute,
    private dataTransferService: DataTransferService,
    private userService: UserService,
    private projectService: ProjectService 
  ) { }

  ngOnInit() {
    let usersObservable = this.userService.getAllUsers();
    let projectsObservable = this.projectService.getAllProjects();
    forkJoin([usersObservable, projectsObservable]).subscribe(results => {
      this.usersList = results[0];
      this.projectsList = results[1];
    });
    
    this.taskService.getAllParentTasks()
      .subscribe(data => {
        this.parentTasks = data;       
        this.setupForm();
      },
      error => {
        this.errorMessage = <any>error;
      });
  }

  setupForm() {
    if (this.router.url.toLowerCase() === '/edittask' ) {
      if (this.dataTransferService.task !== null) {
        this.editMode();
        this.onFormEditInit(this.dataTransferService.task);
      }
      else{
        this.router.navigate(['/addtask']);
      }
    }
    else {
        this.onFormInit();
    }
  }
  addTaskSubmit() {
    this.task = {
      taskId   : this.addTaskForm.controls.TaskId.value,
      taskName : this.addTaskForm.controls.TaskName.value,
      parentId : this.addTaskForm.controls.ParentTask.value == null ? 0 : this.addTaskForm.controls.ParentTask.value,
      priority : this.addTaskForm.controls.Priority.value ==null ? 0 : this.addTaskForm.controls.Priority.value,
      startDate: this.addTaskForm.controls.StartDate.value == null ? Date.now() : this.addTaskForm.controls.StartDate.value,
      endDate  : this.addTaskForm.controls.EndDate.value == null ? Date.now() : this.addTaskForm.controls.EndDate.value,
      status   : true,
      parent   : null,
      projectId: this.addTaskForm.controls.SelectedProjectId.value,
      userId   : this.addTaskForm.controls.SelectedUserId.value,
      project  : null,
      user     : null
    }

    if(this.btnMode == 'Add')
    {
      this.taskService.addTask(this.task)
      .subscribe(data => {
        this.router.navigate(['/viewtask']);
      },
      error => {
        this.errorMessage = <any>error;
      });
    }
    else
    {
      this.taskService.updateTask(this.task)
      .subscribe(data => {
        this.router.navigate(['/viewtask']);
      },
      error => {
        this.errorMessage = <any>error;
      });
    }
  }

  resetData()
  {
    this.addTaskForm.controls.TaskName.reset();
    this.addTaskForm.controls.IsParentTask.reset();
    this.addTaskForm.controls.IsParentTask.enable();
    this.addTaskForm.controls.Priority.reset();
    this.addTaskForm.controls.PriorityDisplay.reset();
    this.addTaskForm.controls.ParentTask.reset();
    this.addTaskForm.controls.StartDate.setValue(this.datePipe.transform(Date.now(), 'MM/dd/yyyy').toString());
    this.addTaskForm.controls.EndDate.setValue(this.datePipe.transform(Date.now() + 86400000, 'MM/dd/yyyy').toString());
    this.isParentTask=false;
    this.addTaskForm.controls.SelectedProjectId.reset();
    this.addTaskForm.controls.SelectedUserId.reset();
    this.addTaskForm.controls.SelectedProjectName.reset();
    this.addTaskForm.controls.SelectedUserName.reset();
  }

  clearData()
  {
    if(this.btnMode === 'Update')
    {
      this.router.navigate(['/viewtask']);
    }
    else
    {
      this.resetData();
    }
  }

  handleParentChange(event)
  {
      if (this.addTaskForm.get('IsParentTask').value==false)
      {
          this.isParentTask=false;
      } 
      else{
        this.isParentTask=true;
      }
  }

  editMode() {
    this.formMode = 'Edit Task';    
    this.btnMode = 'Update';
  }

  addMode() {
    this.formMode = 'Add Task';
    this.btnMode = 'Add';
  }

  onFormInit() {
    this.addTaskForm = new FormGroup({
      'TaskId': new FormControl(0),
      'TaskName': new FormControl(null, [Validators.required]),
      'IsParentTask': new FormControl(null, [Validators.required]),
      'Priority': new FormControl(null, [Validators.required]),
      'PriorityDisplay': new FormControl(null),
      'ParentTask': new FormControl(null, [Validators.required]),
      'StartDate': new FormControl(this.datePipe.transform(Date.now(), 'MM/dd/yyyy').toString(), [Validators.required]),
      'EndDate': new FormControl(this.datePipe.transform(Date.now() + 86400000, 'MM/dd/yyyy').toString(), [Validators.required]),
      'SelectedProjectId': new FormControl(null, [Validators.required]),
      'SelectedUserId': new FormControl(null, [Validators.required]),
      'SelectedProjectName': new FormControl(null, [Validators.required]),
      'SelectedUserName': new FormControl(null, [Validators.required]),
    }, { validators: [this.endDateValidator] });
   
    this.addMode();
    this.clearData();
    this.loaded=true;
  }

  onFormEditInit(task: Task) {
    this.addTaskForm = new FormGroup({
      'TaskId': new FormControl(task.taskId),
      'TaskName': new FormControl(task.taskName, [Validators.required]),
      'IsParentTask': new FormControl(task.parentId === 0 ? true : false, [Validators.required]),
      'Priority': new FormControl(task.priority, [Validators.required]),
      'PriorityDisplay': new FormControl(task.priority, [Validators.required]),
      'ParentTask': new FormControl(task.parentId !== 0 ? task.parent.parentId : null, [Validators.required]),
      'StartDate': new FormControl(task.startDate != null ? this.datePipe.transform(task.startDate, 'MM/dd/yyyy').toString() : null, [Validators.required]),
      'EndDate': new FormControl(task.endDate != null ? this.datePipe.transform(task.endDate, 'MM/dd/yyyy').toString() : null, [Validators.required]),
      'SelectedProjectId': new FormControl(task.parentId !== 0 ? task.projectId : null, [Validators.required]),
      'SelectedUserId': new FormControl(task.parentId !== 0 ? task.userId : null, [Validators.required]),
      'SelectedProjectName': new FormControl(task.parentId !== 0 ? task.project.projectName : null, [Validators.required]),
      'SelectedUserName': new FormControl(task.parentId !== 0 ? task.user.firstName + ' ' + task.user.lastName : null, [Validators.required]),
    }, { validators: [this.endDateValidator] });
    this.loaded=true;
    this.addTaskForm.controls.IsParentTask.disable();
    if (task.parentId !== 0)
    {
        this.isParentTask=false;
    } 
    else{
      this.isParentTask=true;
    }
  }

  assignUser(userId: number, userName: string) {
    this.addTaskForm.patchValue({
      SelectedUserId: userId,
      SelectedUserName: userName
    });
  }

  assignProject(projectId: number, projectName: string) {
    this.addTaskForm.patchValue({
      SelectedProjectId: projectId,
      SelectedProjectName: projectName
    });
  }

  endDateValidator(formGroup): any {
    var startDateTimestamp, endDateTimestamp;
    for (var controlName in formGroup.controls) {
      if (controlName.indexOf("StartDate") !== -1) {
        startDateTimestamp = Date.parse(formGroup.controls[controlName].value);
      }
      if (controlName.indexOf("EndDate") !== -1) {
        endDateTimestamp = Date.parse(formGroup.controls[controlName].value);
      }
    }
    return (endDateTimestamp < startDateTimestamp) ? { endDateLessThanStartDate: true } : null;
  }

}
