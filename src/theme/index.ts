const blue = "#5897F7";
const blueDarkTint = "#407FED";
const blueTint = "#ADCCFF";

const orange = "#D6A75D";
const orangeShadow = "#896120";

const neutral = "#FFFCEF";

const theme = {
    colors: {
        primary: blue,
        primaryDarkTint: blueDarkTint,
        primaryTint: blueTint,
        neutral,
        complementary: orange,
        complementaryShadow: orangeShadow,
    },
    transition: {
        default: (type?: string) => {
            if (type) return `transition: ${type} 0.2s ease`;
            return `transition: all 0.2s ease;`
        }
    },
    borderRadius: {
        default: 3
    }
}

export type ThemeProps = typeof theme;

export default theme;