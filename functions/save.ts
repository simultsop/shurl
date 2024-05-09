export async function onRequestPost({env, request}) {
    let body = await request.text()
    const params = {}
    const queryString = body.split('&')

    queryString.forEach(item => {
        const kv = item.split('=')
        if (kv[0]) params[kv[0]] = kv[1] || true
    })

    let shurl = params['url']
    if(!shurl.startsWith('http://') && !shurl.startsWith('https://')) {
        shurl = `https://${shurl}`
    }

    let existingHandle = await env.kv.get(params['handle'])
    if(existingHandle===null) {
        await env.kv.put(
            params['handle'],
            shurl
        )
        return new Response("Successfully created a shurl", { status: 200 })
    }

    return new Response("Failed creating shurl, handle already in use.", { status: 409 })
}
