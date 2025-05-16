export async function GET({ url }) {
    const targetUrl = url.searchParams.get('targetUrl');

    // Check if the targetUrl is within the allowed domain (newbieland.net and its subdomains)
    const allowedDomain = 'newbieland.net';
    const isDomainAllowed = targetUrl.startsWith(`https://${allowedDomain}/`) || targetUrl.startsWith(`https://*.${allowedDomain}/`);

    // Additional check to ensure the targetUrl is a valid URL
    try {
        new URL(targetUrl);
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid target URL' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    if (!isDomainAllowed) {
        return new Response(JSON.stringify({ error: 'Invalid target URL' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

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