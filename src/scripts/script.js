
  document.addEventListener('DOMContentLoaded', () => {
    const allowedPaths = [
      '/the-beach/offers/',
      '/the-beach/welcome/',
      '/the-beach/cryptopromo/',
      '/the-beach/404/'
    ];
  
    const currentPath = window.location.pathname.toLowerCase();
  
    // Function to check if the current response is a 404
    const checkIf404 = async () => {
      const response = await fetch(window.location.href, { method: 'HEAD' });
      return response.status === 404;
    };
  
    // Only redirect if not already a 404
    checkIf404().then(is404 => {
      if (!is404 && currentPath.startsWith('/the-beach/') && !allowedPaths.includes(currentPath)) {
        window.location.href = '/the-beach/404/';
      }
    });
  });