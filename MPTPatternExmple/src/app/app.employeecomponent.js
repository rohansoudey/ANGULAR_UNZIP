"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppEmployeeComponent = (function () {
    function AppEmployeeComponent() {
        this.emp = [];
    }
    AppEmployeeComponent.prototype.addData = function () {
        if (this.id != 0 && this.name != null && this.salary != 0 && this.dept != null) {
            var employee = { empId: this.id, empName: this.name, empSalary: this.salary, empDept: this.dept };
            this.emp.push(employee);
            this.clearAll();
        }
        else {
            alert("Insert all details");
        }
    };
    AppEmployeeComponent.prototype.putData = function (e) {
        this.id2 = e.empId;
        this.name2 = e.empName;
        this.salary2 = e.empSalary;
        this.dept2 = e.empDept;
    };
    AppEmployeeComponent.prototype.updateData = function () {
        if (this.id2 == null) {
            alert("Press Update Button First!! ");
        }
        else if (this.id2 == 0 || this.name2 == null || this.salary2 == 0 || this.dept2 == null || this.id2 == null) {
            alert("Fields Can't Be empty !!");
        }
        else {
            var obj = null;
            for (var _i = 0, _a = this.emp; _i < _a.length; _i++) {
                obj = _a[_i];
                if (obj.empId == this.id2) {
                    break;
                }
            }
            //obj.empId=this.id2;
            obj.empName = this.name2;
            obj.empSalary = this.salary2;
            obj.empDept = this.dept2;
            this.clearAll();
        }
    };
    AppEmployeeComponent.prototype.deleteData = function (obj) {
        this.clearAll();
        var index = this.emp.indexOf(obj);
        this.emp.splice(index, 1);
    };
    AppEmployeeComponent.prototype.clearAll = function () {
        this.id = null;
        this.name = null;
        this.salary = null;
        this.dept = null;
        this.id2 = null;
        this.name2 = null;
        this.salary2 = null;
        this.dept2 = null;
    };
    return AppEmployeeComponent;
}());
AppEmployeeComponent = __decorate([
    core_1.Component({
        selector: 'emp-component',
        templateUrl: './app.employeecomponent.html'
    })
], AppEmployeeComponent);
exports.AppEmployeeComponent = AppEmployeeComponent;
//# sourceMappingURL=app.employeecomponent.js.map