import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Ensure FormsModule is imported

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,   // Angular common directives like ngIf/ngFor
    FormsModule     // Required for template-driven forms
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']  // Corrected from `styleUrl` to `styleUrls`
})
export class ContactComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log
    }}}