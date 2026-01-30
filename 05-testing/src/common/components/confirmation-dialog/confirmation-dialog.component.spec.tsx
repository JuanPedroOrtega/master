import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent specs', () => {
  it('should not render the dialog when isOpen is false', () => {
    const props = {
      isOpen: false,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: 'Test Title',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
      children: <div>Test content</div>,
    };

    render(<ConfirmationDialogComponent {...props} />);

    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
  });

  it('should render the dialog when isOpen is true', () => {
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: 'Confirm Action',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Accept',
      },
      children: <div>Are you sure?</div>,
    };

    render(<ConfirmationDialogComponent {...props} />);

    expect(screen.getByText('Confirm Action')).toBeInTheDocument();
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Accept')).toBeInTheDocument();
  });

  it('should render custom title as ReactNode', () => {
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: <span data-testid="custom-title">Custom Title</span>,
      labels: {
        closeButton: 'No',
        acceptButton: 'Yes',
      },
      children: <div>Content</div>,
    };

    render(<ConfirmationDialogComponent {...props} />);

    expect(screen.getByTestId('custom-title')).toBeInTheDocument();
    expect(screen.getByText('Custom Title')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', async () => {
    const onCloseMock = vi.fn();
    const onAcceptMock = vi.fn();
    const props = {
      isOpen: true,
      onAccept: onAcceptMock,
      onClose: onCloseMock,
      title: 'Test',
      labels: {
        closeButton: 'Close',
        acceptButton: 'Confirm',
      },
      children: <div>Content</div>,
    };
    const user = userEvent.setup();

    render(<ConfirmationDialogComponent {...props} />);
    const closeButton = screen.getByText('Close');
    await user.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
    expect(onAcceptMock).not.toHaveBeenCalled();
  });

  it('should call onAccept and onClose when accept button is clicked', async () => {
    const onCloseMock = vi.fn();
    const onAcceptMock = vi.fn();
    const props = {
      isOpen: true,
      onAccept: onAcceptMock,
      onClose: onCloseMock,
      title: 'Delete Item',
      labels: {
        closeButton: 'Cancel',
        acceptButton: 'Delete',
      },
      children: <div>Are you sure you want to delete?</div>,
    };
    const user = userEvent.setup();

    render(<ConfirmationDialogComponent {...props} />);
    const acceptButton = screen.getByText('Delete');
    await user.click(acceptButton);

    expect(onAcceptMock).toHaveBeenCalledTimes(1);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it('should render children content correctly', () => {
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: 'Title',
      labels: {
        closeButton: 'No',
        acceptButton: 'Yes',
      },
      children: (
        <div>
          <p>Line 1</p>
          <p>Line 2</p>
          <span>Extra content</span>
        </div>
      ),
    };

    render(<ConfirmationDialogComponent {...props} />);

    expect(screen.getByText('Line 1')).toBeInTheDocument();
    expect(screen.getByText('Line 2')).toBeInTheDocument();
    expect(screen.getByText('Extra content')).toBeInTheDocument();
  });

  it('should display custom labels on buttons', () => {
    const props = {
      isOpen: true,
      onAccept: vi.fn(),
      onClose: vi.fn(),
      title: 'Confirmation',
      labels: {
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      },
      children: <div>Content</div>,
    };

    render(<ConfirmationDialogComponent {...props} />);

    expect(screen.getByText('Cancelar')).toBeInTheDocument();
    expect(screen.getByText('Aceptar')).toBeInTheDocument();
  });
});
