import { render } from '@testing-library/react';

import BragDocumentModule from './brag-document-module';

describe('BragDocumentModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BragDocumentModule />);
    expect(baseElement).toBeTruthy();
  });
});
