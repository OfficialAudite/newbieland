export async function GET({ url }) {
    const targetUrl = url.searchParams.get('targetUrl');

    try {
        const response = await fetch(targetUrl);
        // return response json data from targetUrl
        return new Response(JSON.stringify(await response.json()), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Something went wrong" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
