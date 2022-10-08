import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class ModalService<T> {
  private componentRef: ComponentRef<T> | undefined;
  private itmSource = new Subject();
  updateValue = this.itmSource.asObservable();
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  async open(component: Type<T>, obj?:{name?:string , body?:string} ): Promise<void> {
    if (this.componentRef) {
      return;
    }

    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory<T>(component)
      .create(this.injector);
      if(obj){
        this.componentRef.instance['body']=obj.body;
        this.componentRef.instance['title']=obj.name;
      }
    this.appRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as
                     EmbeddedViewRef<any>)
                     .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  async close(): Promise<void> {
    if (!this.componentRef) {
      return;
    }

    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();

    this.componentRef = undefined;
  }
  changeValue(flag: boolean) {
    this.itmSource.next(flag);
  }
}
