import { Injectable }       from '@angular/core';
 
@Injectable()
export class DashboardService {
 	getScreenMetadata(){
 		return {
 			screenType : "detail",
 			header:{
 				"title": "User Registration Form",
 				"actions":[
 					{
 						"text":"Save",
 						"icon" : "",
 						"iconOnly": false,
 						"handler":"onSave"
 					},
 					{
 						"text":"Reset",
 						"icon" : "",
 						"iconOnly": false,
 						"handler":"onReset"
 					}
 				]
 			},
 			panels : [{
 				title : "MyPanel",
 				name:"panel1",
 				bindPath : "",
 				groups:[{
 					bindPath : "form",
 					name:"form1",
 					type : "form",
 					title : "MyForm1",
 					fields :[{
 						type : "input-text",
 						label : "User Name",
 						name : "username",
 						placeholder : "Enter User Name",
 						value : "username",
 						/*validators :{
 							required : true,
 							minLength : {

 							},
 							errorMessages : {
 								"required":"This field is required",
 								"minLength": "Minimum length ?"
 							}
 						}*/
 						validators :[
 							{
 								key:"required",
 								value: true,
 							    message : "This is Required"
 							},
 							{
 								key:"minLength",
 								value: 3,
 							    message : "Minimum length 3"
 							}
 						]
 					},{
 						type : "input-text",
 						label : "Address ",
 						name : "address",
 						placeholder : "Enter Address",
 						value : "address"
 					},{
 						type : "input-number",
 						label : "Mobile ",
 						name : "mobile",
 						placeholder : "Enter Mobile Number",
 						value : "mobile"
 					},{
 						type : "input-date",
 						label : "DOB ",
 						name : "dob",
 						placeholder : "Enter DOB",
 						value : "dob"
 					}
 					]
 				},
 				{
 					bindPath : "table",
 					name:"table1",
 					type : "table",
 					title : "MyForm1",
 					url:'/api/dummy',
 					editable : true,
					filters:[
						{
							name:'Address',
							label:'Tab1',
							type:'distinct',
							by:'address',
							control:'multiselect'
						},
						{
							name:'Qualification',
							label:'Tab1',
							type:'distinct',
							by:'qualification',
							control:'multiselect'

						},
						{
							name:'Age',
							label:'Tab1',
							type:'number-range',
							by:'age',
							diff:5,
							unit:'Yrs',
							control:'number-range'

						}
					],
 					fields :[{
 						type : "input-text",
 						label : "User Name",
 						name : "username",
 						placeholder : "Enter User Name",
 						value : "username",
 						validators :[
 							{
 								key:"required",
 								value: true,
 							    message : "This is Required"
 							},
 							{
 								key:"minLength",
 								value: 3,
 							    message : "Minimum length 3"
 							}
 						]
 					},{
 						type : "input-text",
 						label : "Address ",
 						name : "address",
 						placeholder : "Enter Address",
 						value : "address"
 					},{
 						type : "input-number",
 						label : "Mobile ",
 						name : "mobile",
 						placeholder : "Enter Mobile Number",
 						value : "mobile"
 					},{
 						type : "input-text",
 						label : "Qualification ",
 						name : "qualification",
 						placeholder : "Enter Qualification",
 						value : "qualification"
 					},{
 						type : "input-number",
 						label : "Age ",
 						name : "age",
 						placeholder : "Enter Age",
 						value : "age"
 					},{
 						type : "input-date",
 						label : "DOB ",
 						name : "dob",
 						placeholder : "Enter DOB",
 						value : "dob"
 					}
 					]
 				}
 				]
 			}
 			]
 		}
 	}
 	getData(){
 		return {
 			form:{
 				username : "",
	 			address : "Abcd",
	 			mobile: 8866779955,
	 			dob : new Date()
	 		},
	 		table:[
		 		{
	 				username : "Brishti",
		 			address : "Howrah",
		 			mobile: 8866779955
		 		},
		 		{
	 				username : "Tuhin",
		 			address : "Bankura",
		 			mobile: 9878676756
		 		}
	 		]
 		}
 	}
}