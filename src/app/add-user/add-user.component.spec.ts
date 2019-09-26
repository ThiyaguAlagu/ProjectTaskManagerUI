import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddUserComponent } from './add-user.component';
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
import { User } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user.service';
import {DataTableModule} from 'primeng/datatable';
import {GrowlModule} from 'primeng/growl';
import { ConfirmationService } from 'primeng/api';


describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;
  let service: UserService;
  let confirmationService: ConfirmationService;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [AddUserComponent],
      imports: [RouterTestingModule, ReactiveFormsModule, DataTableModule, GrowlModule,
        HttpClientModule, FormsModule, FormsModule, ConfirmDialogModule, BrowserAnimationsModule,
        ],
      providers: [UserService, DatePipe, ConfirmationService, {
        provide: HTTP_INTERCEPTORS,
        useClass: Interceptor,
        multi: true
      }]

    })

    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    this.confirmationService = TestBed.get(ConfirmationService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Add User test cases', () => { 

    it('On init button text should be Add', () => {
       
      component.ngOnInit();
      expect(component.addOrUpdateBtn) 
          .toEqual('Add'); 
    });
    
    it('On reset click button text should be Add', () => { 
      component.onReset();
      expect(component.addOrUpdateBtn) 
          .toEqual('Add'); 
    });

    it('On edit click button text changes to edit', () => { 
      component.onEditClick(user);
      expect(component.addOrUpdateBtn) 
          .toEqual('Update'); 
    });
    it('On add should return a message', () => { 
      component.addUser(user);
      expect(component.msgs.length) 
          .toBeGreaterThanOrEqual(0); 
    });
    it('On update should return a message', () => { 
      component.updateUser(user);
      expect(component.msgs.length) 
      .toBeGreaterThanOrEqual(0); 
    });
    it('On error  should return a message', () => { 
      component.showMessage(false,"Error occured!");
      expect(component.msgs.length) 
      .toBeGreaterThanOrEqual(0);  
    });
    /*it('On delete should return a message', () => { 
      component.confirmDelete(user);
      component.confirmService.onAccept();
      expect(component.msgs.length) 
          .toBeGreaterThanOrEqual(0); 
    });*/
  });

  let user : User =
  {
    "userId": 1,
    "firstName": "Sridharrajan",
    "lastName": "K",
    "employeeId": 416812,
    "projectId": null,
    "taskId": null,
    "userProject": null,
    "userTask": null,
    "isDeleted": false
  }
});
