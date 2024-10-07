document.addEventListener('DOMContentLoaded', () => {
  const url = new URL(window.location.href);
  const currentPath = url.pathname.toLowerCase();
  const hasQParam = url.searchParams.has('q');


  // If '/the-beach/' is present without 'preview' or 'q' parameter, redirect to 404
  if (currentPath.includes('/the-beach/') && !url.searchParams.has('preview') && !hasQParam) {
    window.location.replace('https://slotsparadise.com/404/');
    return;
  }

  // Function to check if the current response is a 404
  const checkIf404 = async () => {
    const response = await fetch(window.location.href, { method: 'HEAD' });
    return response.status === 404;
  };

  // Only redirect if not already a 404 and the path starts with '/the-beach/news/'
  checkIf404().then(is404 => {
    if (!is404 && currentPath.startsWith('/the-beach/news/')) {
      window.location.href = currentPath.replace("/the-beach", "");
    }
  });
});
