import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'about-us-card',
  styleUrl: 'about-us-card.css',
  shadow: true,
})
export class ContentCard {
  render() {
    return (
      <Host>
        <ion-card>
          <ion-card-header>
            <h1>"Our mission is to deliver enjoyable and profitable technology through world-class design."</h1>
          </ion-card-header>
        </ion-card>
      </Host>
    );
  }
}
