import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'module-federation-login',
  template: `<h1 style="font-size: 100px;">Hello Login !!!</h1>`,
  standalone: true,
  imports: [CommonModule],
})
export class RemoteEntryComponent {}
