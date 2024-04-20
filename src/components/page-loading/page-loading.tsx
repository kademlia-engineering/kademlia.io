import { Component, h } from '@stencil/core';
import '@google/model-viewer';

@Component({
  tag: 'page-loading',
  styleUrl: 'page-loading.css',
  shadow: true,
})
export class PageLoading {
  render() {
    return (
      <div>
        <model-viewer
          src="assets/3d/boxlogo.glb"
          alt="3d object"
          auto-rotate
          ar
          rotation-per-second="90deg"
        ></model-viewer>
      </div>
    );
  }
}
