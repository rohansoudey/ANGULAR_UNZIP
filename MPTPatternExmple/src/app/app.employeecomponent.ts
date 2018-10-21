import { Component } from '@angular/core';
import {Employee} from './app.employee';

@Component({
  selector: 'emp-component',
  templateUrl: './app.employeecomponent.html'
})


export class AppEmployeeComponent  
{ 
	id:number;
	name:string;
	salary:number;
	dept:string;
	id2:number;
	name2:string;
	salary2:number;
	dept2:string;
	
	emp:Employee[]=[];

	addData():void
	{
		if(this.id!=0 && this.name!=null && this.salary!=0 && this.dept!=null)
		{
				let employee:Employee={empId:this.id,empName:this.name,empSalary:this.salary,empDept:this.dept};
				this.emp.push(employee);
				this.clearAll();
		}
		else
		{
			alert("Insert all details");
		}
	}
	
	putData(e:Employee):void
	{
		this.id2=e.empId;
		this.name2=e.empName;
		this.salary2=e.empSalary;
		this.dept2=e.empDept;		
	}
	
	updateData():void
	{
		if(this.id2==null)
		{
			alert("Press Update Button First!! ");
		}
		else if(this.id2==0 || this.name2==null || this.salary2==0 || this.dept2==null ||this.id2==null)
		{
				alert("Fields Can't Be empty !!");
		}
		else
		{
				let obj:Employee=null;
				for(obj of this.emp)
				{
					if(obj.empId==this.id2)
					{
						break;
					}
				}
				//obj.empId=this.id2;
				obj.empName=this.name2;
				obj.empSalary=this.salary2;
				obj.empDept=this.dept2;
				this.clearAll();
		}
	}
	
	
	
	deleteData(obj:Employee)
	{
		this.clearAll();
		var index=this.emp.indexOf(obj);
		this.emp.splice(index,1);
	}
	clearAll():void
	{
		this.id=null;
		this.name=null;
		this.salary=null;
		this.dept=null;
		this.id2=null;
		this.name2=null;
		this.salary2=null;
		this.dept2=null;
	}
}
