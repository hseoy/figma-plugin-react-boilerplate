import React from 'react';

import { screen, render } from '@testing-library/react';
import App from './App';

describe('App 컴포넌트 렌더링 테스트', () => {
  it("'Hello World' 타이틀을 렌더링해야 합니다.", () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World',
    );
  });
});
