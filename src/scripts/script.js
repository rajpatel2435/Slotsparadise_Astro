
  document.addEventListener('DOMContentLoaded', () => {

      //Redirect the-beach to casino
      const url = new URL(window.location.href);

      // Check if the path includes /lobby/ and no preview query parameter
      if (url.pathname.includes('/the-beach/') && !url.searchParams.has('preview')) {
         // Redirect to 404
         window.location.replace('https://slotsparadise.com/404/');
         return; 
     }
 
    const currentPath = window.location.pathname.toLowerCase();
  
    // Function to check if the current response is a 404
    const checkIf404 = async () => {
      const response = await fetch(window.location.href, { method: 'HEAD' });
      return response.status === 404;
    };
  
    // Only redirect if not already a 404
    checkIf404().then(is404 => {
      if (!is404 && currentPath.startsWith('/the-beach/news/')) {
        window.location.href = currentPath.replace("/the-beach", "");
      }
    });
  });