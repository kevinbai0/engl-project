import { string } from "../../../../Library/Caches/typescript/3.6/node_modules/@types/prop-types";

const blue = "#5897F7";
const blueDarkTint = "#407FED";
const blueTint = "#ADCCFF";
const blueShadow = "#1A588B";

const orange = "#D6A75D";
const orangeShadow = "#896120";

const neutral = "#FFFCEF";

const colors = {
    primary: blue,
    primaryDarkTint: blueDarkTint,
    primaryTint: blueTint,
    primaryShadow: blueShadow,
    neutral,
    complementary: orange,
    complementaryShadow: orangeShadow,
}

const mediaQueries = {
    desktop: "@media only screen and (min-width: 1080px)",
    tablet: "@media only screen and (min-width: 768px)"
}

const fontSizes = {
    bodyMobile: 16,
    body: 24,
    title: 48,
    titleMobile: 36,
    header: 36,
    headerMobile: 24
}

const space = {
    mobileMargin: "20px",
    desktopMargin: "10vw"
}

const theme = {
    colors,
    transition: {
        default: (type?: string) => {
            if (type) return `transition: ${type} 0.2s ease`;
            return `transition: all 0.2s ease;`
        }
    },
    borderRadius: {
        default: 3
    },
    mediaQueries,
    fontSizes,
    space
}

export type ThemeProps = typeof theme;
export type Inline = {
    inline?: string
};

export default theme;