(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-project/add-project.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-project/add-project.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-centered {\n    text-align: center;\n}\n\n.row-right {\n    text-align: right;\n    padding-right: 2%;\n}\n\n.checkbox-padding {\n    padding-left: 5px;\n}\n\n.middleVert {\n    padding-top: 7%;\n}\n\n.middleVert1 {\n    height: 20px;\n}\n\n.text-danger {\n    color: red;\n}\n"

/***/ }),

/***/ "./src/app/add-project/add-project.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-project/add-project.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"3000\" [sticky]=\"false\"></p-growl>\n<h1 class=\"h2\">Add Project</h1>\n<div class=\"bd-callout bd-callout-warning\">\n        <form [formGroup]=\"addProjectForm\" (ngSubmit)=\"addProjectSubmit()\" novalidate>\n                <div class=\"row\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <label class=\"control-label col-sm-4\" for=\"projectNameControl\">Project:</label>\n                        <div class=\"col-sm-7\">\n                            <input class=\"form-control\" placeholder=\"Enter project name\" name=\"projectNameControl\" formControlName=\"projectNameControl\">\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div *ngIf=\"(addProjectForm.controls.projectNameControl.touched && !addProjectForm.controls.projectNameControl.valid)\">\n                            <span class=\"glyphicon glyphicon-info-sign text-warning\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                            <p class=\"text-warning\" style=\"display:inline;\">This is a required field</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-5\"></div>\n                    <div class=\"col-md-6\">\n                        <div class=\"checkbox checkbox-padding\">\n                            <label>\n                                <input type=\"checkbox\" value=\"\" name=\"checkDatesControl\"  (change)=\"handleChange($event)\" formControlName=\"checkDatesControl\">Set Start and End Date\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"col-md-1\"></div>\n                </div>\n                <div class=\"row\" *ngIf=\"addProjectForm.controls.checkDatesControl.value\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <label class=\"control-label col-sm-4\" for=\"startDate\">Start Date:</label>\n                        <div class=\"col-md-8\">\n                            <div class=\"input-group\">\n                                <p-calendar name=\"startDateControl\" formControlName=\"startDateControl\" [showIcon]=\"true\"></p-calendar>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div *ngIf=\"(addProjectForm.controls.startDateControl.touched && !addProjectForm.controls.startDateControl.valid)\">\n                            <span class=\"glyphicon glyphicon-info-sign text-warning\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                            <p class=\"text-warning\" style=\"display:inline;\">This is a required field</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\" *ngIf=\"addProjectForm.controls.checkDatesControl.value\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <label class=\"control-label col-sm-4\" for=\"endDate\">End Date:</label>\n                        <div class=\"col-md-8\">\n                            <div class=\"input-group\">\n                                <p-calendar name=\"endDateControl\" formControlName=\"endDateControl\" [showIcon]=\"true\"></p-calendar>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div *ngIf=\"addProjectForm?.errors?.endDateLessThanStartDate\">\n                            <span class=\"glyphicon glyphicon-info-sign text-warning\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                            <p class=\"text-warning\" style=\"display:inline;\">End date cannot be lower than start date.</p>\n                        </div>\n                        <div *ngIf=\"(addProjectForm.controls.endDateControl.touched && !addProjectForm.controls.endDateControl.valid)\">\n                            <span class=\"glyphicon glyphicon-info-sign text-warning\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                            <p class=\"text-warning\" style=\"display:inline;\">This is a required field</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-8\">\n                        <label class=\"control-label col-sm-3\">Priority:</label>\n                        <div class=\"col-sm-9\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-1\">\n                                    <h4 class=\"middleVert1\">0</h4>\n                                </div>\n                                <div class=\"col-sm-7\">\n                                    <div class=\"middleVert\"></div>\n                                    <p-slider formControlName=\"priorityControl\" [min]=\"0\" [max]=\"30\" [step]=\"1\" [style]=\"{'width':'200px'}\"></p-slider>\n                                </div>\n                                <div class=\"col-sm-1\">\n                                    <h4 class=\"middleVert1\">30</h4>\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <input class=\"form-control\" readonly name=\"priorityDisplayControl\" formControlName=\"priorityDisplayControl\" value=\"{{addProjectForm.controls.priorityControl.value}}\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div *ngIf=\"(addProjectForm.controls.priorityControl.touched && !addProjectForm.controls.priorityControl.valid)\">\n                            <span class=\"glyphicon glyphicon-info-sign text-warning\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                            <p class=\"text-warning\" style=\"display:inline;\">This is a required field</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-8\">\n                        <label class=\"control-label col-sm-3\">Manager:</label>\n                        <div class=\"col-sm-5\">\n                            <input class=\"form-control\" placeholder=\"Select the Manager\" readonly name=\"selectedManagerNameControl\" formControlName=\"selectedManagerNameControl\">\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <button type=\"button\" class=\"btn\" data-toggle=\"modal\" data-target=\"#searchManagersModal\">Search</button>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\"></div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\"></div>\n                    <div class=\"form-group col-md-6\">\n                        <div class=\"col-md-4\"></div>\n                        <div class=\"col-md-9\">\n                            <button type=\"submit\" class=\"btn btn-success btn-md\" [disabled]=\"addProjectForm.invalid\" [ngClass]=\"{\n                                'btn-default': addOrUpdateBtn == 'Add',\n                                'btn-primary': addOrUpdateBtn == 'Update'\n                            }\">{{addOrUpdateBtn}}</button>&nbsp;\n                            <button type=\"button\" class=\"btn btn-md btn-warning\" (click)=\"addProjectReset()\">Reset</button>\n                        </div>\n                    </div>\n                    <div class=\"col-md-2\"></div>\n                </div>\n            </form> </div>\n   \n    <h1 class=\"h2\">View Project</h1>\n                        <p-dataTable [value]=\"projectsList\">\n                            <p-column field=\"projectId\" header=\"Project ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"\n                            [style]=\"{ 'width' : '10%' }\"></p-column>\n                            <p-column field=\"projectName\" header=\"Project Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"startDate\" header=\"Start Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n                                <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                    <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                                </ng-template>\n                            </p-column>\n                            <p-column field=\"endDate\" header=\"End Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n                                <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                    <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                                </ng-template>\n                            </p-column>\n                            <p-column field=\"priority\" header=\"Priority\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"\n                            [style]=\"{ 'width' : '10%' }\"></p-column>\n                            <p-column field=\"projectManager.firstName\" header=\"Manager Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n                                <ng-template let-project=\"rowData\" pTemplate=\"body\">\n                                    <span>{{ project.projectManager.firstName + ' ' + project.projectManager.lastName }}</span>\n                                </ng-template>\n                            </p-column>\n                            <p-column [style]=\"{ 'width' : '25%' }\">\n                                <ng-template let-project=\"rowData\" pTemplate=\"body\">\n                                    <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"updateProject(project)\">Update</button>&nbsp;\n                                    <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"suspendProject(project)\"\n                                    [disabled]=\"project.status=='Suspended'\">Suspend</button>\n                                </ng-template>\n                            </p-column>\n                        </p-dataTable>\n                   \n<br/>\n<!-- Modal - Search Managers -->\n<div id=\"searchManagersModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Search Managers</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-1\"></div>\n                    <div class=\"col-md-10\">\n                        <p-dataTable [value]=\"usersList\">\n                            <p-column field=\"userId\" header=\"User ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"firstName\" header=\"First Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"lastName\" header=\"Last Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"employeeId\" header=\"Employee ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column>\n                                <ng-template let-user=\"rowData\" pTemplate=\"body\">\n                                    <button type=\"button\" class=\"btn btn-success btn-sm\" id=\"assignManager\" (click)=\"assignManager(user.userId, user.firstName + ' ' + user.lastName)\"\n                                        data-dismiss=\"modal\">Assign</button>\n                                </ng-template>\n                            </p-column>\n                        </p-dataTable>\n                    </div>\n                    <div class=\"col-md-1\"></div>\n                </div>\n                <br>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd></p-confirmDialog>\n"

/***/ }),

/***/ "./src/app/add-project/add-project.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-project/add-project.component.ts ***!
  \******************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(formBuilder, projectService, userService, confirmationService, datePipe) {
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.userService = userService;
        this.confirmationService = confirmationService;
        this.datePipe = datePipe;
        this.msgs = [];
        this.addOrUpdateBtn = 'Add';
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.formInit();
        this.getUsers();
        this.getAllProjects();
    };
    AddProjectComponent.prototype.formInit = function () {
        this.addProjectForm = this.formBuilder.group({
            projectIdControl: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            projectNameControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            checkDatesControl: [false],
            startDateControl: [this.datePipe.transform(Date.now(), 'MM/dd/yyyy').toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endDateControl: [this.datePipe.transform(Date.now() + 86400000, 'MM/dd/yyyy').toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            status: ["Active"],
            priorityControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectedManagerIdControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectedManagerNameControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            priorityDisplayControl: [null]
        }, { validator: this.endDateAfterOrEqualValidator });
        this.handleChange(null);
    };
    AddProjectComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersList = [];
        this.userService.getAllUsers()
            .subscribe(function (data) { _this.usersList = data; });
    };
    AddProjectComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.projectsList = [];
        this.projectService.getAllProjects()
            .subscribe(function (data) {
            _this.projectsList = data;
        });
    };
    AddProjectComponent.prototype.updateProject = function (project) {
        this.addOrUpdateBtn = 'Update';
        this.addProjectForm = this.formBuilder.group({
            projectIdControl: [project.projectId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            projectNameControl: [project.projectName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            checkDatesControl: [project.endDate === null && project.startDate === null ? false : true],
            startDateControl: [project.startDate === null ? null : this.datePipe.transform(project.startDate, 'MM/dd/yyyy').toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endDateControl: [project.endDate === null ? null : this.datePipe.transform(project.endDate, 'MM/dd/yyyy').toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            status: [project.status],
            priorityControl: [project.priority, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectedManagerIdControl: [project.managerId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            selectedManagerNameControl: [project.projectManager.firstName + ' ' + project.projectManager.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            priorityDisplayControl: [null]
        }, { validator: this.endDateAfterOrEqualValidator });
        this.handleChange(null);
    };
    AddProjectComponent.prototype.showMessage = function (status, message) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: "Success", detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: "Error", detail: message });
        }
        this.addProjectReset();
    };
    AddProjectComponent.prototype.addProjectReset = function () {
        this.addProjectForm.reset();
        this.formInit();
        this.addOrUpdateBtn = 'Add';
    };
    AddProjectComponent.prototype.addProjectSubmit = function () {
        var _this = this;
        var _project = {
            projectId: this.addProjectForm.get('projectIdControl').value,
            endDate: this.addProjectForm.get('checkDatesControl').value == true ? this.addProjectForm.get('endDateControl').value : null,
            startDate: this.addProjectForm.get('checkDatesControl').value == true ? this.addProjectForm.get('startDateControl').value : null,
            managerId: this.addProjectForm.get('selectedManagerIdControl').value,
            priority: this.addProjectForm.get('priorityControl').value,
            projectName: this.addProjectForm.get('projectNameControl').value,
            status: this.addProjectForm.get('status').value,
            projectManager: null
        };
        if (_project.projectId == 0) {
            this.projectService.addProject(_project)
                .subscribe(function (data) {
                _this.getAllProjects();
                _this.showMessage(true, 'Addes Successfully');
            });
        }
        else {
            this.projectService.updateProject(_project)
                .subscribe(function (data) {
                _this.getAllProjects();
                _this.showMessage(true, 'Updated Successfully');
            });
        }
    };
    AddProjectComponent.prototype.assignManager = function (managerId, managerName) {
        this.addProjectForm.patchValue({
            selectedManagerIdControl: managerId,
            selectedManagerNameControl: managerName
        });
    };
    AddProjectComponent.prototype.handleChange = function (event) {
        if (this.addProjectForm.get('checkDatesControl').value) {
            this.enableControls();
        }
        else {
            this.disableControls();
        }
    };
    AddProjectComponent.prototype.disableControls = function () {
        this.addProjectForm.get('endDateControl').disable();
        this.addProjectForm.get('startDateControl').disable();
    };
    AddProjectComponent.prototype.enableControls = function () {
        this.addProjectForm.get('endDateControl').enable();
        this.addProjectForm.get('startDateControl').enable();
    };
    AddProjectComponent.prototype.suspendProject = function (project) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to suspend project : ' + project.projectName + '?',
            accept: function () {
                project.status = "Suspended";
                _this.projectService.updateProject(project)
                    .subscribe(function (data) { _this.showMessage(true, 'Updated Successfully!'); });
            }
        });
    };
    AddProjectComponent.prototype.endDateAfterOrEqualValidator = function (formGroup) {
        var startDateTimestamp, endDateTimestamp;
        for (var controlName in formGroup.controls) {
            if (controlName.indexOf("startDateControl") !== -1) {
                startDateTimestamp = Date.parse(formGroup.controls[controlName].value);
            }
            if (controlName.indexOf("endDateControl") !== -1) {
                endDateTimestamp = Date.parse(formGroup.controls[controlName].value);
            }
        }
        return (endDateTimestamp < startDateTimestamp) ? { endDateLessThanStartDate: true } : null;
    };
    AddProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.css */ "./src/app/add-project/add-project.component.css")],
            providers: [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/add-task/add-task.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-task/add-task.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".middleVert1 {\r\n    height: 12px;\r\n}\r\n\r\n.text-danger {\r\n    color: red;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/add-task/add-task.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-task/add-task.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<h1 class=\"h2\">{{formMode}}</h1>\n<div class=\"col-md-10\">\n<form [formGroup]=\"addTaskForm\" (ngSubmit)=\"addTaskSubmit()\" *ngIf=\"loaded\">\n        <div class=\"row\" *ngIf=\"!isParentTask\">\n                <div class=\"col-md-2\"></div>\n                <div class=\"form-group col-md-8\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                            <label class=\"control-label\" for=\"SelectedProjectName\">Project:</label>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <input class=\"form-control\" placeholder=\"Select Project\" readonly name=\"SelectedProjectName\" formControlName=\"SelectedProjectName\">\n                        </div>\n                        <div class=\"col-md-2\">\n                            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#searchProjectsModal\">Search</button>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-2\">\n                    <div *ngIf=\"(!addTaskForm.controls.SelectedProjectName.valid)\">\n                        <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                        <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                    </div>\n                </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"form-group col-md-6\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <label class=\"control-label\" for=\"TaskName\">Task:</label>\n                        </div>\n                        <div class=\"col-md-8\">\n                            <input class=\"form-control\" id=\"TaskName\" placeholder=\"Enter task name\" formControlName=\"TaskName\">\n                        </div>\n                    </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div *ngIf=\"(addTaskForm.controls.TaskName.touched && !addTaskForm.controls.TaskName.valid)\">\n                    <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                    <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\"></div>\n            <div class=\"col-md-6\">\n                <div class=\"checkbox checkbox-padding\">\n                    <label>\n                        <input type=\"checkbox\" name=\"IsParentTask\" (change)=\"handleParentChange($event)\" \n                        formControlName=\"IsParentTask\">Parent Task</label>\n                </div>\n            </div>\n            <div class=\"col-md-1\"></div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"!isParentTask\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"form-group col-md-8\">\n                    <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                    <label class=\"control-label\">Priority:</label>\n                            </div>\n                            <div class=\"col-sm-9\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-1\">\n                                            <h4 class=\"middleVert1\">0</h4>\n                                        </div>\n                                        <div class=\"col-sm-8\">\n                                            <div class=\"middleVert1\"></div>\n                                            <p-slider formControlName=\"Priority\" [min]=\"0\" [max]=\"30\" [step]=\"1\" [style]=\"{'width':'200px'}\"></p-slider>\n                                        </div>\n                                        <div class=\"col-sm-1\">\n                                            <h4 class=\"middleVert1\">30</h4>\n                                        </div>\n                                        <div class=\"col-sm-4\">\n                                            <input class=\"form-control\" readonly formControlName=\"PriorityDisplay\" value=\"{{addTaskForm.controls.Priority.value}}\">\n                                        </div>\n                                    </div>\n                            </div>\n                    </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div *ngIf=\"(addTaskForm.controls.Priority.touched && !addTaskForm.controls.Priority.valid)\">\n                    <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                    <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!isParentTask\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"form-group col-md-6\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <label class=\"control-label\" for=\"ParentTask\">Parent Task:</label>\n                        </div>\n                        <div class=\"col-md-8\">\n                            <select class=\"form-control text-left\" style=\"min-width:50%\" id=\"ParentTask\" formControlName=\"ParentTask\">\n                                <option [ngValue]=null>Select </option>\n                                <option *ngFor=\"let parent of parentTasks\" [ngValue]=\"parent.parentId\">\n                                    {{parent.parentTaskName}}\n                                </option>\n                            </select>\n                        </div>\n                    </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div *ngIf=\"(addTaskForm.controls.ParentTask.touched && !addTaskForm.controls.ParentTask.valid)\">\n                    <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                    <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!isParentTask\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"form-group col-md-6\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                                <label class=\"control-label\" for=\"startDate\">Start Date:</label>\n                        </div>\n                        <div class=\"col-md-8\">\n                                <div class=\"input-group\">\n                                    <p-calendar name=\"StartDate\" formControlName=\"StartDate\" [showIcon]=\"true\"></p-calendar>\n                                </div>\n                        </div>\n                    </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div *ngIf=\"(addTaskForm.controls.StartDate.touched && !addTaskForm.controls.StartDate.valid)\">\n                    <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                    <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\" *ngIf=\"!isParentTask\">\n            <div class=\"col-md-2\"></div>\n            <div class=\"form-group col-md-6\">\n                    <div class=\"row\">\n                            <div class=\"col-md-4\">\n                                    <label class=\"control-label\" for=\"EndDate\">End Date:</label>\n                            </div>\n                            <div class=\"col-md-8\">\n                                    <div class=\"input-group\">\n                                            <p-calendar name=\"EndDate\" formControlName=\"EndDate\" [showIcon]=\"true\"></p-calendar>\n                                        </div>\n                            </div>\n                        </div>\n            </div>\n            <div class=\"col-md-3\">\n\n                <div *ngIf=\"addTaskForm?.errors?.endDateLessThanStartDate\">\n                    <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                    <p class=\"text-danger\" style=\"display:inline;\">End date cannot be lower than start date.</p>\n                </div>\n                <div *ngIf=\"(addTaskForm.controls.EndDate.touched && !addTaskForm.controls.EndDate.valid)\">\n                    <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                    <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"!isParentTask\">\n                <div class=\"col-md-2\"></div>\n                <div class=\"form-group col-md-8\">\n                        <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                        <label class=\"control-label\" for=\"SelectedUserName\">User:</label>\n                                </div>\n                                <div class=\"col-md-5\">\n                                        <input class=\"form-control\" placeholder=\"Select User\" readonly name=\"SelectedUserName\" formControlName=\"SelectedUserName\">\n                                </div>\n                                <div class=\"col-md-3\">\n                                        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#searchUsersModal\">Search</button>\n                                </div>\n                            </div>\n                 </div>\n                <div class=\"col-md-2\">\n                    <div *ngIf=\"(!addTaskForm.controls.SelectedUserName.valid)\">\n                        <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                        <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                    </div>\n                </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"form-group col-md-6\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-8\">\n                    <button type=\"submit\" class=\"btn btn-md btn-primary\">{{btnMode}}</button>\n                    &nbsp;\n                    <button type=\"button\" (click)=\"clearData()\" class=\"btn btn-md btn-danger\">Reset</button>\n                </div>\n            </div>\n            <div class=\"col-md-3\"></div>\n        </div>\n    </form>\n</div>\n<div id=\"searchUsersModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog modal-lg\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4 class=\"modal-title\">Search Users</h4>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-1\"></div>\n                    <div class=\"col-md-10\">\n                        <p-dataTable [value]=\"usersList\">\n                            <p-column field=\"userId\" header=\"User ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"firstName\" header=\"First Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"lastName\" header=\"Last Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column field=\"employeeId\" header=\"Employee ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                            <p-column>\n                                <ng-template let-user=\"rowData\" pTemplate=\"body\">\n                                    <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"assignUser(user.userId, user.firstName + ' ' + user.lastName)\"\n                                        data-dismiss=\"modal\">Assign</button>\n                                </ng-template>\n                            </p-column>\n                        </p-dataTable>\n                    </div>\n                    <div class=\"col-md-1\"></div>\n                </div>\n                <br>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div id=\"searchProjectsModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Search Projects</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-1\"></div>\n                        <div class=\"col-md-10\">\n                            <p-dataTable [value]=\"projectsList\">\n                                <p-column field=\"projectName\" header=\"Project Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                                <p-column field=\"startDate\" header=\"Start Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n                                    <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                        <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                                    </ng-template>\n                                </p-column>\n                                <p-column field=\"endDate\" header=\"End Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n                                    <ng-template let-col let-project=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n                                        <span>{{project[col.field]|date:'dd/MM/yyyy'}}</span>\n                                    </ng-template>\n                                </p-column>\n                                <p-column field=\"priority\" header=\"Priority\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n                                <p-column>\n                                    <ng-template let-project=\"rowData\" pTemplate=\"body\">\n                                        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"assignProject(project.projectId, project.projectName)\"\n                                            data-dismiss=\"modal\">Assign</button>\n                                    </ng-template>\n                                </p-column>\n                            </p-dataTable>\n                        </div>\n                        <div class=\"col-md-1\"></div>\n                    </div>\n                    <br>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-task/add-task.component.ts ***!
  \************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_shared_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/data-transfer.service */ "./src/shared/data-transfer.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/observable/forkJoin */ "./node_modules/rxjs/internal/observable/forkJoin.js");
/* harmony import */ var rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(router, taskService, datePipe, route, dataTransferService, userService, projectService) {
        this.router = router;
        this.taskService = taskService;
        this.datePipe = datePipe;
        this.route = route;
        this.dataTransferService = dataTransferService;
        this.userService = userService;
        this.projectService = projectService;
        this.parentTasks = [];
        this.taskId = 0;
        this.formMode = 'Add Task';
        this.btnMode = 'Add';
        this.isParentTask = false;
        this.loaded = false;
        this.projectsList = [];
        this.usersList = [];
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        var usersObservable = this.userService.getAllUsers();
        var projectsObservable = this.projectService.getAllProjects();
        Object(rxjs_internal_observable_forkJoin__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])([usersObservable, projectsObservable]).subscribe(function (results) {
            _this.usersList = results[0];
            _this.projectsList = results[1];
        });
        this.taskService.getAllParentTasks()
            .subscribe(function (data) {
            _this.parentTasks = data;
            _this.setupForm();
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    AddTaskComponent.prototype.setupForm = function () {
        if (this.router.url.toLowerCase() === '/edittask') {
            if (this.dataTransferService.task !== null) {
                this.editMode();
                this.onFormEditInit(this.dataTransferService.task);
            }
            else {
                this.router.navigate(['/addtask']);
            }
        }
        else {
            this.onFormInit();
        }
    };
    AddTaskComponent.prototype.addTaskSubmit = function () {
        var _this = this;
        this.task = {
            taskId: this.addTaskForm.controls.TaskId.value,
            taskName: this.addTaskForm.controls.TaskName.value,
            parentId: this.addTaskForm.controls.ParentTask.value == null ? 0 : this.addTaskForm.controls.ParentTask.value,
            priority: this.addTaskForm.controls.Priority.value == null ? 0 : this.addTaskForm.controls.Priority.value,
            startDate: this.addTaskForm.controls.StartDate.value == null ? Date.now() : this.addTaskForm.controls.StartDate.value,
            endDate: this.addTaskForm.controls.EndDate.value == null ? Date.now() : this.addTaskForm.controls.EndDate.value,
            status: true,
            parent: null,
            projectId: this.addTaskForm.controls.SelectedProjectId.value,
            userId: this.addTaskForm.controls.SelectedUserId.value,
            project: null,
            user: null
        };
        if (this.btnMode == 'Add') {
            this.taskService.addTask(this.task)
                .subscribe(function (data) {
                _this.router.navigate(['/viewtask']);
            }, function (error) {
                _this.errorMessage = error;
            });
        }
        else {
            this.taskService.updateTask(this.task)
                .subscribe(function (data) {
                _this.router.navigate(['/viewtask']);
            }, function (error) {
                _this.errorMessage = error;
            });
        }
    };
    AddTaskComponent.prototype.resetData = function () {
        this.addTaskForm.controls.TaskName.reset();
        this.addTaskForm.controls.IsParentTask.reset();
        this.addTaskForm.controls.IsParentTask.enable();
        this.addTaskForm.controls.Priority.reset();
        this.addTaskForm.controls.PriorityDisplay.reset();
        this.addTaskForm.controls.ParentTask.reset();
        this.addTaskForm.controls.StartDate.setValue(this.datePipe.transform(Date.now(), 'MM/dd/yyyy').toString());
        this.addTaskForm.controls.EndDate.setValue(this.datePipe.transform(Date.now() + 86400000, 'MM/dd/yyyy').toString());
        this.isParentTask = false;
        this.addTaskForm.controls.SelectedProjectId.reset();
        this.addTaskForm.controls.SelectedUserId.reset();
        this.addTaskForm.controls.SelectedProjectName.reset();
        this.addTaskForm.controls.SelectedUserName.reset();
    };
    AddTaskComponent.prototype.clearData = function () {
        if (this.btnMode === 'Update') {
            this.router.navigate(['/viewtask']);
        }
        else {
            this.resetData();
        }
    };
    AddTaskComponent.prototype.handleParentChange = function (event) {
        if (this.addTaskForm.get('IsParentTask').value == false) {
            this.isParentTask = false;
        }
        else {
            this.isParentTask = true;
        }
    };
    AddTaskComponent.prototype.editMode = function () {
        this.formMode = 'Edit Task';
        this.btnMode = 'Update';
    };
    AddTaskComponent.prototype.addMode = function () {
        this.formMode = 'Add Task';
        this.btnMode = 'Add';
    };
    AddTaskComponent.prototype.onFormInit = function () {
        this.addTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'TaskId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0),
            'TaskName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'IsParentTask': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'Priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'PriorityDisplay': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'ParentTask': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'StartDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.datePipe.transform(Date.now(), 'MM/dd/yyyy').toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'EndDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.datePipe.transform(Date.now() + 86400000, 'MM/dd/yyyy').toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'SelectedProjectId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'SelectedUserId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'SelectedProjectName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'SelectedUserName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        }, { validators: [this.endDateValidator] });
        this.addMode();
        this.clearData();
        this.loaded = true;
    };
    AddTaskComponent.prototype.onFormEditInit = function (task) {
        this.addTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'TaskId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.taskId),
            'TaskName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.taskName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'IsParentTask': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.parentId === 0 ? true : false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'Priority': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.priority, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'PriorityDisplay': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.priority, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'ParentTask': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.parentId !== 0 ? task.parent.parentId : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'StartDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.startDate != null ? this.datePipe.transform(task.startDate, 'MM/dd/yyyy').toString() : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'EndDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.endDate != null ? this.datePipe.transform(task.endDate, 'MM/dd/yyyy').toString() : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'SelectedProjectId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.parentId !== 0 ? task.projectId : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'SelectedUserId': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.parentId !== 0 ? task.userId : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'SelectedProjectName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.parentId !== 0 ? task.project.projectName : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'SelectedUserName': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](task.parentId !== 0 ? task.user.firstName + ' ' + task.user.lastName : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        }, { validators: [this.endDateValidator] });
        this.loaded = true;
        this.addTaskForm.controls.IsParentTask.disable();
        if (task.parentId !== 0) {
            this.isParentTask = false;
        }
        else {
            this.isParentTask = true;
        }
    };
    AddTaskComponent.prototype.assignUser = function (userId, userName) {
        this.addTaskForm.patchValue({
            SelectedUserId: userId,
            SelectedUserName: userName
        });
    };
    AddTaskComponent.prototype.assignProject = function (projectId, projectName) {
        this.addTaskForm.patchValue({
            SelectedProjectId: projectId,
            SelectedProjectName: projectName
        });
    };
    AddTaskComponent.prototype.endDateValidator = function (formGroup) {
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
    };
    AddTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/add-task/add-task.component.css")],
            providers: [src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], src_shared_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_shared_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            src_app_services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p-growl [(value)]=\"msgs\" [life]=\"3000\" [sticky]=\"false\"></p-growl>\n<h1 class=\"h2\">Add user</h1>\n<form [formGroup]=\"addUserForm\" (ngSubmit)=\"addUserSubmit()\" novalidate>\n        \n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"form-group col-md-6\">\n                <label class=\"control-label col-sm-4\" for=\"firstNameControl\">First Name:</label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\" placeholder=\"Enter first name\" name=\"firstNameControl\" formControlName=\"firstNameControl\">\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div *ngIf=\"(addUserForm.controls.firstNameControl.touched && !addUserForm.controls.firstNameControl.valid)\">\n                    <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                    <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"form-group col-md-6\">\n                <label class=\"control-label col-sm-4\" for=\"lastNameControl\">Last Name:</label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\" placeholder=\"Enter last name\" name=\"lastNameControl\" formControlName=\"lastNameControl\">\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div *ngIf=\"(addUserForm.controls.lastNameControl.touched && !addUserForm.controls.lastNameControl.valid)\">\n                    <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                    <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"form-group col-md-6\">\n                <label class=\"control-label col-sm-4\" for=\"employeeIdControl\">Employee ID:</label>\n                <div class=\"col-sm-6\">\n                    <input class=\"form-control\" placeholder=\"Enter Employee ID\" name=\"employeeIdControl\" formControlName=\"employeeIdControl\">\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div *ngIf=\"(addUserForm.controls.employeeIdControl.touched && !addUserForm.controls.employeeIdControl.valid)\">\n                    <span class=\"glyphicon glyphicon-info-sign text-danger\" aria-hidden=\"true\" style=\"display:inline;\"></span>\n                    <p class=\"text-danger\" style=\"display:inline;\">This is a required field</p>\n                </div>\n            </div>\n        </div>\n       \n        <div class=\"row\">\n            <div class=\"col-md-3\"></div>\n            <div class=\"form-group col-md-6\">\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-9\">\n                    <button type=\"submit\" class=\"btn btn-success btn-md\" [disabled]=\"addUserForm.invalid\" [ngClass]=\"{\n                        'btn-primary': addOrUpdateBtn == 'Add',\n                        'btn-default': addOrUpdateBtn == 'Update'\n                    }\">{{addOrUpdateBtn}}</button>&nbsp;\n                    <button type=\"button\" class=\"btn btn-md btn-danger\" (click)=\"onReset()\">Reset</button>\n                </div>\n            </div>\n            <div class=\"col-md-2\"></div>\n        </div>\n    </form>\n    <h1 class=\"h2\">View users</h1>\n    <div class=\"col-md-8\">\n    <p-dataTable [value]=\"usersList\">\n            <p-column field=\"employeeId\" header=\"Employee ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n            <p-column field=\"firstName\" header=\"First Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n            <p-column field=\"lastName\" header=\"Last Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n   \n            <p-column>\n                <ng-template let-user=\"rowData\" pTemplate=\"body\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onEditClick(user)\" aria-label=\"Left Align\">\n                        <span class=\"fa fa-edit fa-lg\" aria-hidden=\"true\" ></span>\n                    </button>\n                    &nbsp;\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirmDelete(user)\" aria-label=\"Left Align\">\n                        <span class=\"fa fa-trash-o fa-lg\" aria-hidden=\"true\"></span>\n                    </button>\n                </ng-template>\n            </p-column>\n        </p-dataTable>\n    </div>\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #cd ></p-confirmDialog>\n"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(formBuilder, userService, confirmationService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.confirmationService = confirmationService;
        this.msgs = [];
        this.addOrUpdateBtn = 'Add';
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.formInit();
        this.getAllUsers();
    };
    AddUserComponent.prototype.formInit = function () {
        this.addUserForm = this.formBuilder.group({
            userIdControl: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            firstNameControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastNameControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            employeeIdControl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            projectIdControl: [null],
            taskIdControl: [null]
        });
    };
    AddUserComponent.prototype.onReset = function () {
        this.addUserForm.reset();
        this.formInit();
        this.addOrUpdateBtn = 'Add';
    };
    AddUserComponent.prototype.onEditClick = function (user) {
        this.addOrUpdateBtn = 'Update';
        this.addUserForm = this.formBuilder.group({
            userIdControl: [user.userId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            firstNameControl: [user.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastNameControl: [user.lastName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            employeeIdControl: [user.employeeId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            projectIdControl: [user.projectId],
            taskIdControl: [user.taskId]
        });
    };
    AddUserComponent.prototype.addUserSubmit = function () {
        var _user = {
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
    };
    AddUserComponent.prototype.addUser = function (user) {
        var _this = this;
        if (user.userId == 0) {
            this.userService.addUser(user)
                .subscribe(function (data) {
                _this.getAllUsers();
                _this.showMessage(true, 'Added Successfully');
            });
        }
        else {
            this.userService.updateUser(user)
                .subscribe(function (data) {
                _this.getAllUsers();
                _this.showMessage(true, 'Updated Successfully');
            });
        }
    };
    AddUserComponent.prototype.updateUser = function (user) {
        var _this = this;
        this.userService.updateUser(user)
            .subscribe(function (data) {
            _this.showMessage(true, 'Updated Successfully');
        });
    };
    AddUserComponent.prototype.showMessage = function (status, message) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: "Success", detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: "Error", detail: message });
        }
        this.getAllUsers();
        this.onReset();
    };
    AddUserComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.userService.getAllUsers()
            .subscribe(function (data) {
            _this.usersList = data;
        });
    };
    AddUserComponent.prototype.confirmDelete = function (user) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to delete user : ' + user.employeeId + '?',
            accept: function () {
                user.isDeleted = true;
                _this.userService.updateUser(user)
                    .subscribe(function (data) {
                    _this.showMessage(true, 'Deleted Successfully');
                });
            }
        });
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")],
            providers: [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n    font-size: 13px;\n    color: #c7254e;\n    background: #f9f2f4;\n    border-radius: 3px;\n    padding: 15px;\n    margin: -26px 0 15px;\n  }\n  .navbar-inverse {    \n    border-color: #1f89ce;\n}\n  .navbar-inverse .navbar-nav>li>a {\n    color: #f6f7f9;\n}\n  .navbar-inverse .navbar-brand {\n  color: #f6f7f9;\n}\n\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-static-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Project Manager</a>\n    </div>\n    <ul class=\"nav navbar-nav navbar-right\">\n    \n    </ul>\n  </div>\n</nav>\n\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"nav navbar-nav navbar-header\">\n      <div class=\"nav navbar-nav\">\n        <ul class=\"nav navbar-nav\">          \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/addproject\" routerLinkActive=\"active\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file\"><path d=\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\"></path><polyline points=\"13 2 13 9 20 9\"></polyline></svg>\n              Add Project\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/adduser\" routerLinkActive=\"active\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path></svg>\n              Add User\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/addtask\" routerLinkActive=\"active\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bar-chart-2\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line></svg>\n              Add Task\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/viewtask\" routerLinkActive=\"active\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-layers\"><polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline></svg>\n              View Task\n            </a>\n          </li>\n        </ul>\n\n      </div>\n    </nav>\n\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\"><div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\"><div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div></div><div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div></div></div>\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom\">\n            \n        <router-outlet></router-outlet>\n      </div>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Task Manager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/datatable */ "./node_modules/primeng/datatable.js");
/* harmony import */ var primeng_datatable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_datatable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/slider.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_slider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-task/view-task.component */ "./src/app/view-task/view-task.component.ts");
/* harmony import */ var src_shared_data_transfer_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/shared/data-transfer.service */ "./src/shared/data-transfer.service.ts");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-project/add-project.component */ "./src/app/add-project/add-project.component.ts");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', redirectTo: '/viewtask', pathMatch: 'full' },
    { path: 'addtask', component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_4__["AddTaskComponent"] },
    { path: 'edittask', component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_4__["AddTaskComponent"] },
    { path: 'viewtask', component: _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_14__["ViewTaskComponent"] },
    { path: 'addproject', component: _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_16__["AddProjectComponent"] },
    { path: 'adduser', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_19__["AddUserComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_4__["AddTaskComponent"],
                _view_task_view_task_component__WEBPACK_IMPORTED_MODULE_14__["ViewTaskComponent"],
                _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_16__["AddProjectComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_19__["AddUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], primeng_datatable__WEBPACK_IMPORTED_MODULE_7__["DataTableModule"], primeng_growl__WEBPACK_IMPORTED_MODULE_8__["GrowlModule"], primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_10__["SliderModule"], primeng_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModule"]
            ],
            providers: [_services_task_service__WEBPACK_IMPORTED_MODULE_13__["TaskService"], src_app_services_project_service__WEBPACK_IMPORTED_MODULE_17__["ProjectService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_18__["UserService"], src_shared_data_transfer_service__WEBPACK_IMPORTED_MODULE_15__["DataTransferService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getAllProjects = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/project/GetAllProjects");
    };
    ProjectService.prototype.getProject = function (projectId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/project/GetProject?id=" + projectId);
    };
    ProjectService.prototype.updateProject = function (project) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/project/UpdateProject", project);
    };
    ProjectService.prototype.addProject = function (project) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/project/AddProject", project);
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getAllTasks = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/task/GetAllTasks");
    };
    TaskService.prototype.getTask = function (taskId, isParent) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/task/GetTask?id=" + taskId + "&isParent=" + isParent);
    };
    TaskService.prototype.updateTask = function (task) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/task/UpdateTask", task);
    };
    TaskService.prototype.addTask = function (task) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/task/AddTask", task);
    };
    TaskService.prototype.deleteTask = function (task) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/task/DeleteTask", task);
    };
    TaskService.prototype.endTask = function (task) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/task/EndTask", task);
    };
    TaskService.prototype.getAllTypeOfTasks = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/task/GetAllTypeOfTasks");
    };
    TaskService.prototype.getAllParentTasks = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/task/getAllParentTasks");
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAllUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/user/GetAllUsers");
    };
    UserService.prototype.getUser = function (userId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/user/GetUser?id=" + userId);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/user/UpdateUser", user);
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/user/AddUser", user);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/view-task/view-task.component.css":
/*!***************************************************!*\
  !*** ./src/app/view-task/view-task.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/view-task/view-task.component.html":
/*!****************************************************!*\
  !*** ./src/app/view-task/view-task.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\" [life]=\"3000\" [sticky]=\"false\"></p-growl>\n\n<h1 class=\"h2\">View Task</h1>\n\n<p-dataTable [value]=\"tasks\" class=\"table table-striped table-sm\">\n    <p-column  field=\"taskId\" header=\"Task ID\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n    <p-column  field=\"taskName\" header=\"Task Name\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"></p-column>\n    <p-column  field=\"parent.parentTaskName\" header=\"Parent Task\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n        <ng-template let-col let-task=\"rowData\" pTemplate=\"body\">\n            <span>{{ task.parentId != 0 ? task.parent.parentTaskName : '-'}}</span>\n        </ng-template>\n    </p-column>\n    <p-column field=\"priority\" header=\"Priority\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n        <ng-template let-col let-task=\"rowData\" pTemplate=\"body\">\n            <span>{{ task.parentId != 0 ? task.priority : '-'}}</span>\n        </ng-template>\n    </p-column >\n    <p-column field=\"startDate\" header=\"Start Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\">\n        <ng-template let-col let-task=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n            <span *ngIf=\"task.parentId !=0\">{{task[col.field]|date:'dd/MM/yyyy'}}</span>\n        </ng-template>\n    </p-column >\n    <p-column field=\"endDate\" header=\"End Date\" sortable=\"true\" [filter]=\"true\" filterMatchMode=\"contains\"> \n      <ng-template let-col let-task=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\n        <span *ngIf=\"task.parentId !=0\" >{{ task[col.field]|date:'dd/MM/yyyy'}}</span>\n    </ng-template>\n  </p-column>\n  <p-column field=\"taskId\"  [style]=\"{ 'width' : '25%' }\">\n      <ng-template let-col let-task=\"rowData\" pTemplate=\"body\" >\n          \n          <div align=\"center\">\n              <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"editTask(task)\"\n              [disabled]=\"!task.status && task.parentId!=0\" >Edit</button>\n              &nbsp;\n              <button type=\"button\" class=\"btn btn-warning btn-sm\" (click)=\"endTask(task)\"\n              [disabled]=\"!task.status\">End Task</button>\n          </div>\n      </ng-template>\n  </p-column>\n</p-dataTable>   \n\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\" #confirmDialog ></p-confirmDialog>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/view-task/view-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/view-task/view-task.component.ts ***!
  \**************************************************/
/*! exports provided: ViewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTaskComponent", function() { return ViewTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/components/common/confirmationservice */ "./node_modules/primeng/components/common/confirmationservice.js");
/* harmony import */ var primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_shared_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/data-transfer.service */ "./src/shared/data-transfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewTaskComponent = /** @class */ (function () {
    function ViewTaskComponent(router, taskService, datePipe, confirmationService, dataTransferService) {
        this.router = router;
        this.taskService = taskService;
        this.datePipe = datePipe;
        this.confirmationService = confirmationService;
        this.dataTransferService = dataTransferService;
        this.tasks = [];
        this.msgs = [];
    }
    ViewTaskComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.taskService.getAllTypeOfTasks()
            .subscribe(function (data) {
            _this.tasks = data;
        }, function (error) {
            _this.errorMessage = error;
        });
    };
    ViewTaskComponent.prototype.ngOnInit = function () {
        this.getAllTasks();
    };
    ViewTaskComponent.prototype.editTask = function (task) {
        this.dataTransferService.task = task;
        this.router.navigate(['/edittask']);
    };
    ViewTaskComponent.prototype.endTask = function (task) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure that you want to end this task?',
            accept: function () {
                _this.taskService.endTask(task)
                    .subscribe(function (data) {
                    _this.showMessage(true, "Updated Successfully");
                    _this.getAllTasks();
                });
            }
        });
    };
    ViewTaskComponent.prototype.showMessage = function (status, message) {
        this.msgs = [];
        if (status === true) {
            this.msgs.push({ severity: 'success', summary: "Success", detail: message });
        }
        else {
            this.msgs.push({ severity: 'error', summary: "Error", detail: message });
        }
    };
    ViewTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-task',
            template: __webpack_require__(/*! ./view-task.component.html */ "./src/app/view-task/view-task.component.html"),
            styles: [__webpack_require__(/*! ./view-task.component.css */ "./src/app/view-task/view-task.component.css")],
            providers: [src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            primeng_components_common_confirmationservice__WEBPACK_IMPORTED_MODULE_4__["ConfirmationService"],
            src_shared_data_transfer_service__WEBPACK_IMPORTED_MODULE_5__["DataTransferService"]])
    ], ViewTaskComponent);
    return ViewTaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:49708"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/shared/data-transfer.service.ts":
/*!*********************************************!*\
  !*** ./src/shared/data-transfer.service.ts ***!
  \*********************************************/
/*! exports provided: DataTransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTransferService", function() { return DataTransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataTransferService = /** @class */ (function () {
    function DataTransferService() {
    }
    DataTransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataTransferService);
    return DataTransferService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\Documents\FSE\TaskManager\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map