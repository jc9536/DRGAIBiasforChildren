import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: '#000000'
        }
    })
}

const components = {
    Heading: {

        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 24,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                MarginBotton: 4
            }
        }
    },

    Link: {
        baseStyle: props => ({
            color: mode('#85540c', '#fbd38d')(props),
            textUnderlineOffset: 3
        })
    },

    Badge: {

        sizes: {
            xl: {
                fontSize: "xl"
            }

        }
    }
}

const fonts = {
    heading: `'Pixelify Sans', sans-serif`,
    body: `'Pixelify Sans', sans-serif`,
}

const colors = {
    gold: '#F2D479'
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    colors,
    fonts
})

export default theme