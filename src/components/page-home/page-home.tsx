import { Component, Fragment, h, State, Element } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  shadow: true,
})
export class PageHome {
  @Element() el: HTMLElement;
  @State() showLoading: boolean = true;
  @State() showContent: boolean = false;

  loadingElement?: HTMLElement;

  componentDidLoad() {
    this.setupObserver();
    const content = this.el.shadowRoot.querySelector('content');
    content.addEventListener('scroll', () => {
      const maxScroll = content.scrollHeight - content.clientHeight;
      if (content.scrollTop >= maxScroll) {
        requestAnimationFrame(() => {
          content.scrollTo(0, 0); // Scroll back to the top
        });
      } else if (content.scrollTop === 0) {
        requestAnimationFrame(() => {
          content.scrollTo(0, maxScroll); // Scroll to the bottom
        });
      }
    });
  }

  setupObserver() {
    const options = {
      root: null, // viewport
      rootMargin: '-50% 0px 0px 0px', // Adjust top margin negatively
      threshold: 0 // Trigger when 50% of the element is out of view
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          this.showLoading = false; // Hide loading
          this.showContent = true; // Show other components
          observer.unobserve(entry.target); // Stop observing
        }
      });
    }, options);
  
    this.loadingElement = this.el.shadowRoot?.querySelector('page-loading');
    if (this.loadingElement) {
      observer.observe(this.loadingElement);
    }
  }

  render() {
    return (
      <Fragment>
        <content>
          {this.showLoading && (
            <section>
              <page-loading></page-loading>
            </section>
          )}
          {this.showContent && (
            <Fragment>
              <home-button text="kademlia"></home-button>
              {/*<logo-token src="token-icon" rotationPerSecond="45deg"></logo-token>*/}
            </Fragment>
          )}
          <section>Section 1</section>
          <section>Section 2</section>
          <section>Section 2</section>
          <section>Section 2</section>
        </content>
      </Fragment>
    );
  }
}




/*

*/