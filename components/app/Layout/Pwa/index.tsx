import { ReactNode } from "react";
import DisableZoom from "./disable-zoom";



const Pwa = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <DisableZoom />
            {children}
        </>
    );
}

export default Pwa;