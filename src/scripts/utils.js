export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function replaceHtmlEntities(text) {
  return text.replace(/&#8217;/, "'");
}

export function formatDate(inputDateString) {
  // Create a Date object from the input string
  const dateObject = new Date(inputDateString);

  // Define the options for formatting
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // Format the date using the options
  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  // Return the formatted date
  return formattedDate;
}

// Example usage:
/* const inputDateString = "2023-08-11T18:12:37";
  const formattedDate = formatDate(inputDateString);
  console.log(formattedDate); // Output: August 11, 2023 */

export function generateBreadcrumbs(uri) {
  const parts = uri.split("/").filter((part) => part !== ""); // Split the URI and remove empty parts
  let breadcrumb = '<a href="/the-beach/">Home</a>'; // Start with 'Home'

  // Initialize the current path
  let currentPath = "/the-beach";

  // Iterate over the parts to build the breadcrumb trail
  parts.forEach((part) => {
    // Update the current path
    currentPath += "/" + part;

    // Convert dashes to spaces for display text
    const text = part.replace(/-/g, " ");

    // Append the separator and the current part as a hyperlink to the breadcrumb trail
    breadcrumb += ` &gt; <a href="${currentPath}">${text}</a>`;
  });

  return breadcrumb;
}
