import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'module-federation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dashboard';

  @ViewChild('formComponent', { read: ViewContainerRef })
  formComponent!: ViewContainerRef;

  async loadComponent() {
    const { RemoteEntryComponent } = await import('login/component');

    this.formComponent.clear();
    this.formComponent.createComponent(RemoteEntryComponent);
  }
}
