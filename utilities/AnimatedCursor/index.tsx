import AnimatedCursor from "react-animated-cursor"



const AnimatedCursorComponent = () => {
    return (
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
    );
}

export default AnimatedCursorComponent;