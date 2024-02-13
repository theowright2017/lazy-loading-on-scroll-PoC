import React, {useState, useRef} from 'react'

export function useOnScroll() {
    const hasScrolled = useRef(false)

    function setHasScrolledTrue() {
        hasScrolled.current = true;
    }

    return {
        hasScrolled: hasScrolled.current,
        setHasScrolledTrue
    }
}