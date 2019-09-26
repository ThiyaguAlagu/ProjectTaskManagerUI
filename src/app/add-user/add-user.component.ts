import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ConfirmationService, Message } from 'primeng/api';
import { User } from 'src/app/entities/user';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserService, ConfirmationService]
})
export class AddUserComponent implements OnInit {
    cd: any;
    msgs: Message[] = [];
    usersList: User[];
    public addOrUpdateBtn: string = 'Add';
    public addUserForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private userService: UserService, 
      private confirmationService: ConfirmationService) { }

    ngOnInit() {
        this.formInit();
        this.getAllUsers();
    }

    formInit()
    {
      this.addUserForm = this.formBuilder.group({
      userIdControl: [0, Validators.required],
      firstNameControl: [null, Validators.required],
      lastNameControl: [null, Validators.required],
      employeeIdControl: [null, Validators.required],
      projectIdControl:[null],
      taskIdControl:[null]
      });
    }

    onReset() {
      this.addUserForm.reset();
      this.formInit();
      this.addOrUpdateBtn = 'Add';
    }
 
   onEditClick(user: User) {
      this.addOrUpdateBtn = 'Update';
      this.addUserForm = this.formBuilder.group({
      userIdControl: [user.userId, Validators.required],
      firstNameControl: [user.firstName, Validators.required],
      lastNameControl: [user.lastName, Validators.required],
      employeeIdControl: [user.employeeId, Validators.required],
      projectIdControl: [user.projectId],
      taskIdControl: [user.taskId]
    });
  }

  addUserSubmit() {
    let _user={
      userId: this.addUserForm.get('userIdControl').value,
      firstName: this.addUserForm.get('firstNameControl').value,
      lastName: this.addUserForm.get('lastNameControl').value,
      employeeId: this.addUserForm.get('employeeIdControl').value,
      taskId: this.addUserForm.get('taskIdControl').value,
      projectId: this.addUserForm.get('projectIdControl').value,
      userProject: null,
      userTask: null,
      isDeleted: false
    };
      this.addUser(_user);
  
  }

  addUser(user : User)
  {
    if( user.userId == 0) {
        this.userService.addUser(user)
        .subscribe(data => {
            this.getAllUsers();
            this.showMessage(true, 'Added Successfully');           
        });
    }
    else {
        this.userService.updateUser(user)
        .subscribe(data => {
            this.getAllUsers();
            this.showMessage(true, 'Updated Successfully');           
        });
      }
  }
  
  updateUser(user: User) {
      this.userService.updateUser(user)
          .subscribe(data => {
              this.showMessage(true,'Updated Successfully');
          });
  }

  showMessage(status: boolean, message: string) {
      this.msgs=[];
      if (status === true) {
          this.msgs.push({ severity: 'success', summary: "Success", detail: message});
      }
      else {
          this.msgs.push({ severity: 'error', summary: "Error", detail: message });

      }
      this.getAllUsers();
      this.onReset();
  }

  getAllUsers() {
      this.userService.getAllUsers()
          .subscribe(data => {   
            this.usersList = data; 
          });
  }

  confirmDelete(user: User) {
      this.confirmationService.confirm({
          message: 'Are you sure that you want to delete user : ' + user.employeeId + '?',
          accept: () => {
              user.isDeleted = true;
              this.userService.updateUser(user)
              .subscribe(data => {
                  this.showMessage(true,'Deleted Successfully');
              });            
            }
      });
  }
}
