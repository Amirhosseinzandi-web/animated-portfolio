"use client"


import AnimatedCursor from "react-animated-cursor"
import MediaQuery from "react-responsive";



const AnimatedCursorComponent = () => {
    return (
        <MediaQuery minWidth={992}>
            <AnimatedCursor
                innerSize={28}
                outerSize={15}
                color='100,90,80'
                outerAlpha={0.2}
                innerScale={0.9}
                outerScale={5}
                trailingSpeed={50}
                clickables={[
                    'a',
                    'input[type="text"]',
                    'input[type="email"]',
                    'input[type="number"]',
                    'input[type="submit"]',
                    'input[type="image"]',
                    'label[for]',
                    'select',
                    'textarea',
                    'button',
                    '.link'
                ]}
            />
        </MediaQuery>
    );
}

export default AnimatedCursorComponent;