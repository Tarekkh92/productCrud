import { Component, OnInit, Inject } from '@angular/core';
import {productsService}from '../shared/service/products.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatFormField } from '@angular/material';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Product } from '../shared/models/Product.model';


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

    //publishedDate: string;
    public productNameControl: FormControl;
    public productDescriptionControl: FormControl;
    public productCountControl: FormControl;
    private sub: Subscription;
    public SaveForm: FormGroup;

    constructor(private dialogRef: MatDialogRef<SaveComponent>,private productsService: productsService,@Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
      this.dialogRef.close();
     }
  
    ngOnInit() {
    this.productNameControl = new FormControl("", Validators.required);
    this.productDescriptionControl = new FormControl("", Validators.required);
   this.productCountControl=new FormControl("",Validators.required);
    this.SaveForm = new FormGroup({
      productNameControl: this.productNameControl,
      productDescriptionControl: this.productDescriptionControl,
      productCountControl:this.productCountControl,

    });

    }

    addBook() {
        // this.publishedDate = new Date().toLocaleDateString()+" at: "+new Date().toLocaleTimeString();
        var feedback = new Product(0, this.productNameControl.value,this.productDescriptionControl.value, this.productCountControl.value);
        this.sub =  this.productsService.addProductAsync(feedback).subscribe();
        this.dialogRef.close();
         window.location.reload();
      }
    
}
