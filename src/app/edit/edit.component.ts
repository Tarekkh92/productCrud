import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { productsService } from '../shared/service/products.service';
import { Product } from '../shared/models/Product.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    id: any;
    public publishedDate: String;
    public productNameControl: FormControl;
    public productDescriptionControl:FormControl;
    public productCountControl: FormControl;
    private sub: Subscription;
    public editForm: FormGroup;

    constructor(private dialogRef: MatDialogRef<EditComponent>,private booksService: productsService,@Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
      this.dialogRef.close();
     }
     editBook(){
         this.id=this.data;
       // this.publishedDate = new Date().toLocaleDateString()+" at: "+new Date().toLocaleTimeString();
        var feedback = new Product(0, this.productNameControl.value,this.productDescriptionControl.value, this.productCountControl.value);
        this.sub =  this.booksService.updateBookAssync(this.data['id']  ,feedback).subscribe();
        this.dialogRef.close();
         window.location.reload();
    }
    ngOnInit() {
    
    this.productNameControl = new FormControl(this.data['productNameControl'], Validators.required);
    this.productDescriptionControl =new FormControl(this.data['this.productDescription'],Validators.required);
    this.productCountControl = new FormControl(this.data['productCount'], Validators.required);
    this.editForm = new FormGroup({
        productNameControl: this.productNameControl,
        productCountControl: this.productCountControl,
    });

   
    }
}
