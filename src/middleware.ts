/**
 * @type {import("astro").MiddlewareHandler}
 */
export const onRequest = async ({ request }, next) => {
    const url = new URL(request.url);
  
    // Check if the pathname does not end with a single trailing slash
    if (!url.pathname.endsWith('/')) {
      // Redirect to the URL with a trailing slash
      url.pathname = `${url.pathname}/`;
      
      return new Response(null, {
        status: 301, // Permanent redirect
        headers: {
          Location: url.toString()
        }
      });
    }
  
    // If the URL already has a trailing slash, proceed as normal
    return next();
  };
  