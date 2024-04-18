import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'page-loading',
  styleUrl: 'page-loading.css',
  shadow: true,
})
export class PageLoading {
  render() {
    return (
      <Fragment>
        <ion-content class="ion-padding" color="primary">
          kad
        </ion-content>
      </Fragment>
    );
  }
}
