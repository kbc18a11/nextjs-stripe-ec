import { GetServerSideProps, GetServerSidePropsContext, PreviewData } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

type Props = {
    products: Data[]
}

export default function HelloWorld(props: Props) {
    return (
        <div>
            <Head>
                <title>Hello World</title>
                <meta name="description" content="検索エンジン用の説明文" />
            </Head>
            <h1>Hello World</h1>
            <pre><code>{JSON.stringify(props, null, 2)}</code></pre>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async function getServerSideProps(context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
    try {
        const host = context.req.headers.host || 'localhost:3000';
        const products: Data = await fetch(`http://${host}/api/products`)
            .then(data => data.json());
        return {
            props: {
                products,
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {
                products: [],
            }
        }
    }
}
