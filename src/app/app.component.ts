import { Component } from '@angular/core';
import { QuoteService } from './service/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chanOnceSaid';
  quote: any;
  anime: any;
  loading: boolean = true;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.getRandomQuote().subscribe((data) => {
      if (data && data.result && data.result.length > 0) {
        this.quote = data.result[0];

        if (this.quote) {
          this.quoteService.getAnime(this.quote.anime).subscribe((animeData) => {
            if (animeData && animeData.data && animeData.data.length > 0) {
              this.anime = animeData.data[0];
              this.loading = false;
            } else {
              console.error('Invalid anime response format:', animeData);
              this.loading = false;
            }
          });
        }
      } else {
        console.error('Invalid quote response format:', data);
        this.loading = false;
      }
    });
  }
}
