import { Component, Host, h } from '@stencil/core';
import '@google/model-viewer';

@Component({
  tag: 'bouldin-card',
  styleUrl: 'bouldin-card.css',
  shadow: true,
})
export class ContentCard {
  render() {
    return (
      <Host>
        <ion-card>
          <model-viewer
            src="assets/3d/boxlogo-bouldin.glb"
            alt="3d object"
            ar
          ></model-viewer>
          <ion-card-header>
            <h1>another fintech product.</h1>
          </ion-card-header>
        </ion-card>
      </Host>
    );
  }
}
