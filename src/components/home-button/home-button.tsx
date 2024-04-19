import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'home-button',
  styleUrl: 'home-button.css',
  shadow: true
})
export class HomeButton {
  @Prop() text: string;
  navigateHome() {
    window.location.href = '/';
  }

  render() {
    return (
      <Host>
        <button onClick={this.navigateHome}>
          {this.text}
        </button>
      </Host>
    );
  }
}
