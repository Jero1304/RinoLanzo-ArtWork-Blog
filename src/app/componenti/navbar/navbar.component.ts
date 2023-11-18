import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DarkModeService } from 'src/app/service/dark-mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent {
  hero: boolean = true;
  about: boolean = false;
  curriculum: boolean = false;
  contact: boolean = false;

  darkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {}

  // disabledItem(itemName: string) {
  //   console.log(itemName);
  // }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.darkModeService.setDarkMode(this.darkMode);
  }

  disabledItem(itemName: string) {
    this.hero = true;
    this.about = false;
    this.curriculum = false;
    this.contact = false;

    let elementId: string;

    switch (itemName) {
      case 'hero':
        this.hero = true;
        elementId = 'hero-section';
        break;
      case 'about':
        this.about = true;
        elementId = 'about-section';
        break;
      case 'curriculum-vitae':
        this.curriculum = true;
        elementId = 'cv-section';
        break;
      case 'contact':
        this.contact = true;
        elementId = 'contact-section';
        break;
    }
    this.scrollToElement(elementId);
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = -50; // Puoi regolare l'offset in base alle tue esigenze
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
