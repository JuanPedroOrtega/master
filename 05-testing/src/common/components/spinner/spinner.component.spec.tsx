import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as promiseTracker from 'react-promise-tracker';

vi.mock('react-promise-tracker');

describe('SpinnerComponent specs', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call usePromiseTracker hook', () => {
    const spy = vi.spyOn(promiseTracker, 'usePromiseTracker').mockReturnValue({
      promiseInProgress: false,
    });

    render(<SpinnerComponent />);

    expect(spy).toHaveBeenCalled();
  });

  it('should render component when promiseInProgress is false', () => {
    vi.spyOn(promiseTracker, 'usePromiseTracker').mockReturnValue({
      promiseInProgress: false,
    });

    const result = render(<SpinnerComponent />);

    expect(result).toBeTruthy();
  });

  it('should render component when promiseInProgress is true', () => {
    vi.spyOn(promiseTracker, 'usePromiseTracker').mockReturnValue({
      promiseInProgress: true,
    });

    const result = render(<SpinnerComponent />);

    expect(result).toBeTruthy();
  });

  it('should handle different promiseInProgress states', () => {
    const mockTracker = vi.spyOn(promiseTracker, 'usePromiseTracker');
    
    mockTracker.mockReturnValue({ promiseInProgress: true });
    const { rerender } = render(<SpinnerComponent />);
    expect(mockTracker).toHaveReturnedWith({ promiseInProgress: true });

    mockTracker.mockReturnValue({ promiseInProgress: false });
    rerender(<SpinnerComponent />);
    expect(mockTracker).toHaveReturnedWith({ promiseInProgress: false });
  });
});
