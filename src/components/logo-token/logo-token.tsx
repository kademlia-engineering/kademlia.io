import { Component, h } from '@stencil/core';
import '@google/model-viewer';

@Component({
  tag: 'logo-token',
  styleUrl: 'logo-token.css',
  shadow: true,
})
export class LogoToken {
  render() {
    return (
      <div class="falling-element">
        <model-viewer
          src="assets/3d/token-icon.glb"
          class="falling-element"
          alt="icon-symbol 3d object"
          auto-rotate
          camera-controls
          ar
        ></model-viewer>
      </div>
    );
  }

}
