import { AfterViewInit, Component } from '@angular/core';
import { QuoteService } from '../service/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  quote: any;
  anime: any;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.getRandomQuote().subscribe((data) => {
      if (data && data.result && data.result.length > 0) {
        this.quote = data.result[0];

        if (this.quote) {
          this.quoteService.getAnime(this.quote.anime).subscribe((animeData) => {
            if (animeData && animeData.data && animeData.data.length > 0) {
              this.anime = animeData.data[0];
              console.log('anime response:', this.anime);
            } else {
              console.error('Invalid anime response format:', animeData);
            }
          });
        }
      } else {
        console.error('Invalid quote response format:', data);
      }
    });
  }
}

