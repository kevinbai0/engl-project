import React, { useEffect, useState, useRef } from "react";
import styled from "../../theme/styled"

interface INavBarProps {
    elements: string[]
    currentSelected: number
    setSelected(index: number): void
    backgroundVisible: boolean
}

const NavBar: React.FC<INavBarProps> = ({elements, currentSelected, setSelected, backgroundVisible}) => {
    const parentRef = useRef<HTMLElement>();
    const sliderRef = useRef<HTMLDivElement>();
    const refs: React.RefObject<HTMLDivElement>[] = elements.map(_ => useRef());
    const [ transform, setTransform ] = useState({scale: 0.5, translateX: 0})
    useEffect(() => {
        let element = refs[currentSelected].current;
        setTransform({
            translateX: element.getBoundingClientRect().x - parentRef.current.getBoundingClientRect().x - 25 + 7.5,
            scale: (element.clientWidth + 30) / sliderRef.current.clientWidth
        })
    }, [currentSelected]);
    
    return (
        <Nav ref={parentRef} backgroundVisible={backgroundVisible}>
            <Slider scale={transform.scale} translateX={transform.translateX} sliderRef={sliderRef}/>
            {elements.map((name, i) => 
                <NavItem key={i} ref={refs[i]} onClick={() => setSelected(i)}>{name}</NavItem>
            )}
        </Nav>
    );
}

const Nav = styled.nav<{backgroundVisible: boolean}>`
    display: flex;
    position: fixed;
    right: 2vw;
    top: 2vw;
    z-index: 20;
    padding: 10px 25px;
    border-radius: 100px;
    ${props => props.backgroundVisible ?
        `
            background-color: #1A588B;
            box-shadow: 0 2px 18px 0 rgba(0,0,0,0.2);
        `
    :
        `
            background-color: transparent;
            box-shadow: 0 2px 18px 0 rgba(0,0,0,0);
        `
    }
    
    transition: all 0.2s ease;
`;

const NavItem = styled.div`
    margin: 0 15px;
    color: ${props => props.theme.colors.neutral};
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
        opacity: 0.5;
    }
`;

const Slider = ({scale, translateX, sliderRef}: {scale: number, translateX: number, sliderRef: React.RefObject<HTMLDivElement>}) => 
    <SliderContainer scale={scale} translateX={translateX} ref={sliderRef}>
        <Left scale={1/scale}/>
        <Middle scale={scale * 2}/>
        <Right scale={1/scale}/>
    </SliderContainer>

const Left = styled.div<{scale: number}>`
    width: 40px;
    height: 100%;
    transform: scaleX(${props => props.scale});
    background-color: ${props => props.theme.colors.trueComplementary};
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    transition: all 0.2s ease;

`
const Right = styled.div<{scale: number}>`
    width: 40px;
    height: 100%;
    transform: scaleX(${props => props.scale});
    background-color: ${props => props.theme.colors.trueComplementary};
    border-bottom-right-radius: 50px;
    border-top-right-radius: 50px;
    transition: all 0.2s ease;
`
const Middle = styled.div<{scale: number}>`
    width: 20px;
    height: 100%;
    transform: scaleX(${props => props.scale});
    background-color: ${props => props.theme.colors.trueComplementary};
`

const SliderContainer = styled.div<{scale: number, translateX: number}>`
    display: flex;
    position: absolute;
    z-index: -1;
    left: 0;
    height: 60%;
    top: 0;
    bottom: 0;
    margin: auto 0;
    transform: translateX(${props => props.translateX}px) scaleX(${props => props.scale});
    transform-origin: left;
    transition: all 0.2s ease;
`

export default NavBar;