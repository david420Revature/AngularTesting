import { Component } from '@angular/core';
import { Deck } from '../deck';
import { Card } from '../card';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent {

  #deck?: Deck;

  cardUrl = "https://deckofcardsapi.com/static/img/back.png"

  constructor(
    private http: HttpClient
  ) {}

  async deck(): Promise<Deck> {
    if (!this.#deck) {
      const json = await fetch(
       "https://deckofcardsapi.com/api/deck/new/",
       {method: 'POST'}
      ).then(res => res.json());
      this.#deck = {
        id: json.deck_id,
        shuffled: json.shuffled,
        remaining: json.remaining
      };
    }
    return this.#deck;
  }

  async draw(): Promise<Card> {
    const deck = await this.deck();
    const card = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck.id}/draw/`
    ).then(res => res.json()).then(json => {
      this.#deck = {
        id: json.deck_id,
        remaining: json.remaining,
        shuffled: json.shuffled
      };
      return {
          deck_id: this.#deck.id,
          code: json.cards[0].code,
          value: json.cards[0].value,
          suit: json.cards[0].suit
      };
    });
    this.cardUrl = `https://deckofcardsapi.com/static/img/${card.code}.png`
    return card;
  }
}
