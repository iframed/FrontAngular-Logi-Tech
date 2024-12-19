import { CommonModule } from '@angular/common';
import { Component, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
   
    CommonModule 
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  // Variable pour contrôler si le formulaire doit apparaître ou non
  promoPopupVisible = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (typeof window !== 'undefined') {
      const promoPopup = document.getElementById('promo-popup');
      console.log("Scroll Position:", window.scrollY); // Vérifiez si la position de scroll est bien capturée

      // Vérifiez si la page a été défilée de plus de 200px
      if (window.scrollY > 10) {
        console.log("Ajout de la classe 'show'"); // Vérifiez quand la classe est ajoutée
        if (promoPopup) {
          promoPopup.classList.add('show');
        }
      } else {
        console.log("Retrait de la classe 'show'"); // Vérifiez quand la classe est retirée
        if (promoPopup) {
          promoPopup.classList.remove('show');
        }
      }
    }
  }

  ngAfterViewInit() {
    // Assurez-vous que 'window' est défini avant d'y accéder
    if (typeof window !== 'undefined' && window.scrollY > 10) {
      const promoPopup = document.getElementById('promo-popup');
      if (promoPopup) {
        promoPopup.classList.add('show');
      }
    }
  }



  
    isPopupVisible = false; // Variable pour contrôler l'affichage du popup

    showPopup() {
        this.isPopupVisible = !this.isPopupVisible; // Inverse la valeur pour afficher/cacher
    }
}
