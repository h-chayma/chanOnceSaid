import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.hamburgerMenu();
  }
  hamburgerMenu(): void {
    if ($('.hamburger-menu').length) {
      $('.hamburger-menu').on('click', function () {
        $('.bar').toggleClass('animate');
        $('.mobile-navar').toggleClass('active');
        return false;
      });

      $('.has-children').on('click', function () {
        $(this).children('ul').slideToggle('slow', 'swing');
        $('.icon-arrow').toggleClass('open');
      });
    }
  }
}
