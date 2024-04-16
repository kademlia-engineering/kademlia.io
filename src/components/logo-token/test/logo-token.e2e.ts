import { newE2EPage } from '@stencil/core/testing';

describe('logo-token', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<logo-token></logo-token>');

    const element = await page.find('logo-token');
    expect(element).toHaveClass('hydrated');
  });
});
