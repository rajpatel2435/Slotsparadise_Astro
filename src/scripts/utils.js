export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  



  export function formatDate(inputDateString) {
    // Create a Date object from the input string
    const dateObject = new Date(inputDateString);
  
    // Define the options for formatting
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
  
    // Format the date using the options
    const formattedDate = dateObject.toLocaleDateString('en-US', options);
  
    // Return the formatted date
    return formattedDate;
  }
  
  // Example usage:
  /* const inputDateString = "2023-08-11T18:12:37";
  const formattedDate = formatDate(inputDateString);
  console.log(formattedDate); // Output: August 11, 2023 */
  
 