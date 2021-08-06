import * as React from 'react';
import { render } from '@testing-library/react';
import { BasicCard } from './card.composition';

it('should render with the correct text', () => {
  const card = render(<BasicCard />);
  const renderedButton = card.findByText("Button")
  expect(renderedButton).toBeTruthy();
});
