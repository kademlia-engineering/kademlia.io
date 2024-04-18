import { Component, Prop, h } from '@stencil/core';
import '@google/model-viewer';

@Component({
  tag: 'logo-token',
  styleUrl: 'logo-token.css',
  shadow: true,
})
export class LogoToken {
  @Prop() src: string;

  render() {
    const filePath = `assets/3d/${this.src}.glb`;
    return (
      <model-viewer
        src={filePath}
        alt="3d object"
        auto-rotate
        camera-controls
        ar
      ></model-viewer>
    );
  }
}
