import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actualite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actualite.component.html',
  styleUrl: './actualite.component.css'
})
export class ActualiteComponent {

  blogPosts = [
    {
      title: 'Pourquoi opter pour un site web sur mesure ?',
      summary: 'Explorez les avantages d’un développement sur mesure pour mieux répondre aux besoins spécifiques de votre entreprise.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?fit=crop&w=800&q=80',
      link: 'https://www.blogdumoderateur.com/site-sur-mesure/'
    },
    {
      title: 'Les tendances UX/UI à suivre en 2024',
      summary: 'Découvrez les meilleures pratiques et tendances en design UX/UI pour améliorer l’expérience utilisateur.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=800&q=80',
      link: 'https://uxdesign.cc/design-trends-2024-what-to-expect-b3e6745e72c2'
    },
    {
      title: 'Pourquoi les Progressive Web Apps (PWA) sont l’avenir ?',
      summary: 'Apprenez comment les PWA révolutionnent la présence en ligne avec des performances rapides et une expérience utilisateur fluide.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=800&q=80',
      link: 'https://web.dev/progressive-web-apps/'
    },
    {
      title: 'Meilleures pratiques pour le SEO en 2024',
      summary: 'Optimisez votre site web pour le référencement grâce à des techniques à jour et efficaces.',
      image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?fit=crop&w=800&q=80',
      link: 'https://moz.com/blog/seo-best-practices-2024'
    }
  ];

}
