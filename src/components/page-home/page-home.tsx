import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  //shadow: true,
})
export class PageHome {
  render() {
    return (
      <Fragment>
        <ion-content class="ion-padding">
          <home-button text="kademlia"></home-button>
          <logo-token src="token-icon"></logo-token>
          <section>Section 1</section>
          <section>Section 1</section>
          <section>Section 1</section>
          <section>Section 1</section>
          <section>Section 1</section>
          <section>Section 1</section>
          <section>Section 1</section>
          <section>Section 1</section>
          <section>Section 1</section>
          <section>Section 1</section>
        </ion-content>
      </Fragment>
    );
  }
}
