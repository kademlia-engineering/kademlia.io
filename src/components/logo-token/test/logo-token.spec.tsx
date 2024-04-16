import { newSpecPage } from '@stencil/core/testing';
import { LogoToken } from '../logo-token';

describe('logo-token', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LogoToken],
      html: `<logo-token></logo-token>`,
    });
    expect(page.root).toEqualHtml(`
      <logo-token>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </logo-token>
    `);
  });
});
