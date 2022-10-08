import { ConfigDropDown } from '../../../../shared/models/ConfigDropDown';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ModalService } from 'src/app/shared/services/modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-drown-list',
  templateUrl: './product-drown-list.component.html',
  styleUrls: ['./product-drown-list.component.scss']
})
export class ProductDrownListComponent implements OnInit, OnDestroy {
  config: Partial<ConfigDropDown> = {
    displayKey: "name", // if objects array passed which key to be displayed defaults to description
    search: true,
    limitTo: 10,
    placeholder: 'Select or add new product',
    labelAdd: 'Add new product'
  };
  onDestroy$: Subject<void> = new Subject();
  isUpdate = false;
  options: Partial<Product>[] = [
    {
      name: "Product 1",
      type: 'type1',
      subCategory: true,
      category: "category",
      referenceId: '1234',
      password: '123456',
      currency: "2",
      fee: "1.5",
      id: 1
    },
    {

      name: "Product 2",
      type: 'type1',
      subCategory: true,
      category: "category",
      referenceId: '1234',
      password: '123456',
      currency: "2",
      fee: "1.5",
      id: 2
    },
    {
      type: 'type1',
      subCategory: true,
      category: "category",
      referenceId: '1234',
      password: '123456',
      currency: "2",
      fee: "1.5",
      name: "Product 3",
      id: 3
    },
    {
      type: 'type1',
      subCategory: true,
      category: "category",
      referenceId: '1234',
      password: '123456',
      currency: "2",
      fee: "1.5",
      name: "Product 4",
      id: 4,
    },
    {
      type: 'type1',
      subCategory: true,
      category: "category",
      referenceId: '1234',
      password: '123456',
      currency: "2",
      fee: "1.5",
      name: "Product 5",
      id: 5,
    },
  ];
  singleSelect: Product;
  productInfo: boolean = false;
  passwordToggle: boolean = false;
  productForm: FormGroup;
  isDelete: boolean;
  constructor(public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private modalService: ModalService<any>,
    private toastr: ToastrService) {
    this.productForm = this.initForm();
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngOnInit(): void {
    this.updateList();
  }
  searchChange($event: any) {
    console.log($event);
  }
  redirectToAdd() {
    this.clearForm();
    this.productForm.get('type').setValue('type1');
    this.productInfo = true;
    this.passwordToggle=false;
    // this.router.navigate(['./add-product'], { relativeTo: this.route });
  }
  updateForm() {
   this.passwordToggle=true;
    this.productInfo = true;
    this.isUpdate = true;
    this.isDelete=false;
    this.productForm.patchValue(this.singleSelect);

  }
  async showAlert(): Promise<void> {
    const { AlertComponent } = await import(
      '../alert/alert.component'
    );

    await this.modalService.open(AlertComponent,);
  }

  initForm() {
    return this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      subCategory: [false, [Validators.required]],
      category: ['', [Validators.required]],
      referenceId: [''],
      password: ['', [Validators.required]],
      currency: ['', [Validators.required]],
      fee: ['', [Validators.required]],
      id: [{ value: '', disable: true }]
    });
  }
  updateList() {
    this.modalService.updateValue.pipe(takeUntil(this.onDestroy$)).subscribe((flag) => {
      if (flag) {
        if (this.isUpdate) {
          const { id } = this.productForm.value;
          this.options = this.options.map(item => {
            if (item.id == id) {
              item = this.productForm.value
            }
            return item;

          });
          this.singleSelect=this.productForm.value;
          this.showSuccess();
        }
        else if(this.isDelete){
          this.options=  this.options.filter(item=>item.id != this.singleSelect.id);
          this.showSuccess("Product deleted successfully");
          this.clearForm();
        }
        else {
          this.productForm.get('id').setValue(this.options.length + 1);
          this.options.push(this.productForm.value);
          this.singleSelect = this.productForm.value;
          this.productInfo=true;
          this.isUpdate=true;
          this.cd.detectChanges();
          this.showSuccess();
        }
        //  this.clearForm();

      }

    })
  }
 async deleteProduct(): Promise<void> {
  this.isDelete=true;
  this.isUpdate=false;
    const { AlertComponent } = await import(
      '../alert/alert.component'
    );
    let obj={name:this.singleSelect.name , body:"Are you sure you want to delete product? Once deleted, you won't be able to access it again"}

    await this.modalService.open(AlertComponent, obj);
  }
  clearForm() {
    this.productForm.reset();
    this.productInfo = false;
    this.isUpdate = false;
    this.isDelete=false;
    this.singleSelect=null;
  }
  showSuccess(message?: string) {
    this.toastr.success(message || 'Changes saved successfully');
  }
}
