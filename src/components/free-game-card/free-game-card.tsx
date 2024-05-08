import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'free-game-card',
  styleUrl: 'free-game-card.css',
  shadow: true,
})
export class ContentCard {
  render() {
    return (
      <Host>
        <ion-card>
          <a href="https://github.com/kademlia-engineering">
            <ion-card-header>
                <h1>free game</h1>
            </ion-card-header>
          </a>
        </ion-card>
      </Host>
    );
  }
}
