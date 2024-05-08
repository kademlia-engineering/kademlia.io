import { Component, Host, h } from '@stencil/core';
import '@google/model-viewer';

@Component({
  tag: 'zilker-card',
  styleUrl: 'zilker-card.css',
  shadow: true,
})
export class ContentCard {
  render() {
    return (
      <Host>
        <ion-card>
          <model-viewer
            src="assets/3d/boxlogo-zilker.glb"
            alt="3d object"
            ar
          ></model-viewer>
          <ion-card-header>
            <h1>the music library.</h1>
          </ion-card-header>
        </ion-card>
      </Host>
    );
  }
}
