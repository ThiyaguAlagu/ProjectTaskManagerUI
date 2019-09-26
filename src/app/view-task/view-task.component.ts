import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/entities/task';
import { TaskService } from 'src/app/services/task.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { Message } from 'primeng/components/common/message';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { DataTransferService } from 'src/shared/data-transfer.service';


@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css'],
  providers: [ TaskService,ConfirmationService, DatePipe]
})
export class ViewTaskComponent implements OnInit {
  tasks: Task[]=[];
  errorMessage: any;
  msgs: Message[] = [];

constructor
(
  private router: Router,
  private taskService: TaskService,
  private datePipe: DatePipe,
  private confirmationService:ConfirmationService,
  private dataTransferService: DataTransferService   
 ) { }

getAllTasks()
{
  this.taskService.getAllTypeOfTasks()
  .subscribe(data => {
    this.tasks = data;
  },
  error => {
    this.errorMessage = <any>error;
  });
}
  ngOnInit() {
   this.getAllTasks();
  }

  editTask(task: Task) {
    this.dataTransferService.task=task;
    this.router.navigate(['/edittask']);
    
} 
endTask(task: Task) {

    this.confirmationService.confirm({
        message: 'Are you sure that you want to end this task?',
        accept: () => {
            this.taskService.endTask(task)
                .subscribe(data => { 
                  this.showMessage(true, "Updated Successfully"); 
                  this.getAllTasks();
                });
        }
    });
}

showMessage(status: boolean, message: string) {
    this.msgs = [];
    if (status === true) {
        this.msgs.push({ severity: 'success', summary: "Success", detail: message });
    }
    else {
        this.msgs.push({ severity: 'error', summary: "Error", detail: message });

    }
}

}
