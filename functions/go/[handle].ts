export async function onRequestGet(context) {
    const handle = context.params.user;

    try {
        let shurlValue = await env.kv.get(handle)
        const redirectToUrl = new URL(shurlValue);
        return Response.redirect(redirectToUrl, 301);    
    } catch (error) {
        return new Response(`Failed to find shurl: ${handle}.`, { status: 404 })    
    }
}
