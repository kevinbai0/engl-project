import { useRef } from "react";

function useCustomRef<T extends HTMLElement>(element?: T) {
    const ref = useRef<T>(element);

    function pos() {
        if (!ref.current) return undefined;
        return getPosition(ref.current);
    }

    return {
        ref,
        pos,
    }
}

function getPosition(el: HTMLElement) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent as HTMLElement);
    return { x: lx,y: ly };
}

export default useCustomRef;