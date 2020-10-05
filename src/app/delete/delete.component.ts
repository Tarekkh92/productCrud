import { Component, OnInit, Inject } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { productsService } from '../shared/service/products.service';
import { Product } from '../shared/models/Product.model';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

    id: any;
    publishedDate: string;
    // public _contactForm: FormGroup;
    public authorNameControl: FormControl;
    public bookTitleControl: FormControl;
    private sub: Subscription;
    public deleteForm: FormGroup;

    constructor(private dialogRef: MatDialogRef<DeleteComponent>,private productsService: productsService,@Inject(MAT_DIALOG_DATA) public data: any) { }
    onNoClick(): void {
      this.dialogRef.close();
     }
     deleteBook(){
         this.id=this.data;
         this.sub =  this.productsService.deleteBookassync(this.data['id']).subscribe();
        this.dialogRef.close();
         window.location.reload();
    }
    ngOnInit() {
    
    this.authorNameControl = new FormControl("", Validators.required);
    this.bookTitleControl = new FormControl("", Validators.required);
    this.deleteForm = new FormGroup({
        titleControl: this.authorNameControl,
        messageControl: this.bookTitleControl,
    });

   
    }
}
