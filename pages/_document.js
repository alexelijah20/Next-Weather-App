import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage, ctx }) {
        const sheet = new ServerStyleSheet();
        const initialProps = Document.getInitialProps(ctx)
        return { ...initialProps }

        function handleCollectStyles(App) {
            return props => {
                return sheet.collectStyles(<App {...props} />);
            };
        }

        const page = renderPage(App => handleCollectStyles(App));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
