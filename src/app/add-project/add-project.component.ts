import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Message, ConfirmationService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/entities/project';
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user.service';

@Component({
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.css'],
    providers: [ProjectService,ConfirmationService,DatePipe]
})

export class AddProjectComponent implements OnInit {
    msgs: Message[] = [];
    projectsList: Project[];
    usersList: User[];
    public addOrUpdateBtn: string = 'Add';
    public addProjectForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private projectService: ProjectService, 
        private userService: UserService, private confirmationService: ConfirmationService, 
        private datePipe: DatePipe) { }

    ngOnInit() {
        this.formInit();
        this.getUsers();
        this.getAllProjects();
    }
    formInit()
    {
            this.addProjectForm = this.formBuilder.group({
            projectIdControl: [0, Validators.required],
            projectNameControl: [null, Validators.required],
            checkDatesControl: [false],
            startDateControl: [this.datePipe.transform(Date.now(),'MM/dd/yyyy').toString(),Validators.required],
            endDateControl: [this.datePipe.transform(Date.now()+86400000,'MM/dd/yyyy').toString(),Validators.required],
            status: ["Active"],
            priorityControl: [null, Validators.required],
            selectedManagerIdControl: [null, Validators.required],
            selectedManagerNameControl: [null, Validators.required],
            priorityDisplayControl: [null]
        },
        {validator: this.endDateAfterOrEqualValidator});
        this.handleChange(null);

    }

    getUsers() {
        this.usersList = [];
        this.userService.getAllUsers()
            .subscribe(data => { this.usersList = data; });
    }
    getAllProjects() {
        this.projectsList = [];
        this.projectService.getAllProjects()
            .subscribe(
                data => { this.projectsList = data; 
                });
    }


    updateProject(project: Project) {
        this.addOrUpdateBtn = 'Update';
        this.addProjectForm = this.formBuilder.group({
            projectIdControl: [project.projectId, Validators.required],
            projectNameControl: [project.projectName, Validators.required],
            checkDatesControl: [project.endDate === null && project.startDate === null ? false : true],
            startDateControl: [project.startDate===null?null: this.datePipe.transform(project.startDate,'MM/dd/yyyy').toString(),Validators.required],
            endDateControl:  [project.endDate===null?null:this.datePipe.transform(project.endDate,'MM/dd/yyyy').toString(),Validators.required],
            status: [project.status],
            priorityControl: [project.priority, Validators.required],
            selectedManagerIdControl: [project.managerId, Validators.required],
            selectedManagerNameControl: [project.projectManager.firstName + ' ' + project.projectManager.lastName, Validators.required],
            priorityDisplayControl: [null]
        }, {validator: this.endDateAfterOrEqualValidator});
        this.handleChange(null);

    }

    showMessage(status: boolean, message: string) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: "Success", detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: "Error", detail: message });

        }
        this.addProjectReset();
    }

    addProjectReset() {
        this.addProjectForm.reset();
        this.formInit();
        this.addOrUpdateBtn = 'Add';
    }
    

    addProjectSubmit() {
        let _project={
            projectId: this.addProjectForm.get('projectIdControl').value,
            endDate: this.addProjectForm.get('checkDatesControl').value == true ? this.addProjectForm.get('endDateControl').value : null,
            startDate: this.addProjectForm.get('checkDatesControl').value == true ? this.addProjectForm.get('startDateControl').value : null,
            managerId: this.addProjectForm.get('selectedManagerIdControl').value,
            priority: this.addProjectForm.get('priorityControl').value,
            projectName: this.addProjectForm.get('projectNameControl').value,
            status: this.addProjectForm.get('status').value,
            projectManager: null
        };
        if( _project.projectId == 0) {
            this.projectService.addProject(_project)
            .subscribe(data => {
                this.getAllProjects();
                this.showMessage(true, 'Addes Successfully');           
            });
        }
        else {
            this.projectService.updateProject(_project)
            .subscribe(data => {
                this.getAllProjects();
                this.showMessage(true, 'Updated Successfully');           
            });
        }
    }

    assignManager(managerId: number, managerName: string) {

        this.addProjectForm.patchValue({
            selectedManagerIdControl: managerId,
            selectedManagerNameControl: managerName
        });
    }

    handleChange(event) {
        
        if (this.addProjectForm.get('checkDatesControl').value)
        {
            this.enableControls();
        } 
        else{
            this.disableControls();
        }
    }

    disableControls() {
       
        this.addProjectForm.get('endDateControl').disable();
        this.addProjectForm.get('startDateControl').disable();
    }

    enableControls() {
        this.addProjectForm.get('endDateControl').enable();
        this.addProjectForm.get('startDateControl').enable();
        
    }

    suspendProject(project: Project) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to suspend project : ' + project.projectName + '?',
            accept: () => {
                project.status="Suspended";
                this.projectService.updateProject(project)
                    .subscribe(data => { this.showMessage(true, 'Updated Successfully!'); });
            }
        });
    }

    endDateAfterOrEqualValidator(formGroup): any {
        var startDateTimestamp, endDateTimestamp;
        for(var controlName in formGroup.controls) {
          if(controlName.indexOf("startDateControl") !== -1) {
            startDateTimestamp = Date.parse(formGroup.controls[controlName].value);
          }
          if(controlName.indexOf("endDateControl") !== -1) {
            endDateTimestamp = Date.parse(formGroup.controls[controlName].value);
          }
        }
        return (endDateTimestamp < startDateTimestamp) ? { endDateLessThanStartDate: true } : null;
      }
}