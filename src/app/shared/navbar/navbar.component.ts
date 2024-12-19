import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarVisible: boolean = true; // Par défaut, la navbar est visible
  isMenuOpen: boolean = false; // Etat du menu burger (ouvert ou fermé)
  lastScrollTop: number = 0; // Position du dernier scroll

  // Détecte l'événement de défilement
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Si l'utilisateur fait défiler vers le bas, on cache la navbar
    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.isNavbarVisible = false;
    } else {
      // Si l'utilisateur fait défiler vers le haut, on affiche la navbar
      this.isNavbarVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Met à jour la position du dernier scroll
  }

  // Fonction pour basculer l'état du menu burger
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
