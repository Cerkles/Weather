import { useEffect, RefObject } from 'react';

export function useOutsideClick(ref: RefObject<HTMLElement>, handler: (event: MouseEvent) => void): void {
    useEffect(() => {
        const listener = (event: MouseEvent): void => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
}

