import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common'; // Import NgIf
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [NgIf,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  homeName: string = "homeNamee";
  date: string = '';
  showYes: boolean = false;
  phone: string = "1234567899";
  belowName: string = "";

  constructor(private router: Router) {

  }

   ngOnInit(): void {
    // alert('Please login')
   }

   clicked() {
    this.date = Date();
    this.showYes = true;
    alert(`${this.date} clicked`);
   }

   goToDash() {
    this.router.navigateByUrl('dashboard')
   }

   onInputChange(event: Event): void {
    // Update homeName when the input value changes
    const input = event.target as HTMLInputElement;
    this.belowName = input.value;
  }


}
