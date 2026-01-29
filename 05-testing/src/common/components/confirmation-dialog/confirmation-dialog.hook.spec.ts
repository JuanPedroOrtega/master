import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from '#common/models';

describe('useConfirmationDialog specs', () => {
  it('should return initial state with isOpen false and empty itemToDelete', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
  });

  it('should open dialog and set itemToDelete when onOpenDialog is called', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const testItem: Lookup = {
      id: '123',
      name: 'Test Item',
    };

    act(() => {
      result.current.onOpenDialog(testItem);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(testItem);
  });

  it('should close dialog when onClose is called', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const testItem: Lookup = {
      id: '456',
      name: 'Another Item',
    };

    act(() => {
      result.current.onOpenDialog(testItem);
    });

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(testItem);
  });

  it('should reset itemToDelete when onAccept is called', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const testItem: Lookup = {
      id: '789',
      name: 'Item to Accept',
    };

    act(() => {
      result.current.onOpenDialog(testItem);
    });

    act(() => {
      result.current.onAccept();
    });

    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
  });

  it('should handle multiple open and close cycles correctly', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const item1: Lookup = { id: '1', name: 'First' };
    const item2: Lookup = { id: '2', name: 'Second' };

    act(() => {
      result.current.onOpenDialog(item1);
    });
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item1);

    act(() => {
      result.current.onClose();
    });
    expect(result.current.isOpen).toBe(false);

    act(() => {
      result.current.onOpenDialog(item2);
    });
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item2);

    act(() => {
      result.current.onAccept();
    });
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
  });

  it('should not change isOpen when onAccept is called', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const testItem: Lookup = { id: '100', name: 'Test' };

    act(() => {
      result.current.onOpenDialog(testItem);
    });

    const wasOpen = result.current.isOpen;

    act(() => {
      result.current.onAccept();
    });

    expect(result.current.isOpen).toBe(wasOpen);
  });
});
