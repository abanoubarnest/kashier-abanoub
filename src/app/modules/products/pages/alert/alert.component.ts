import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  title:string='';
  body:string='';
  @ViewChild('modalComponent') modal:
  | ModalComponent<AlertComponent>
  | undefined;

constructor(
  private modalService:ModalService<any>
) {


}
  ngOnInit(): void {
  }

async createRecord(): Promise<void> {
  this.modalService.changeValue(true);
  await this.close();
}

async close(): Promise<void> {
  await this.modal?.close();
}
async DeleteRecord(): Promise<void> {
  this.modalService.changeValue(true);
  await this.close();
}


}
