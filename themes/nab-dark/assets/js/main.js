const filter = document.querySelector("#filter-input");
const items = document.querySelectorAll("#feed > li");

filter.addEventListener("input", () => {
  const query = filter.value.trim().toLowerCase();

  items.forEach((item) => {
    const title = item.getAttribute("data-title")?.toLowerCase() ?? "";
    const tags = item.getAttribute("data-tags")?.toLowerCase() ?? "";
    const year = item.getAttribute("data-year")?.toLowerCase() ?? "";

    if (title.includes(query)) {
        console.log(title);
    }
    const matches = 
      title.includes(query) ||
      tags.includes(query)  ||
      year.includes(query);
    
    item.style.display = matches ? "" : "none";    
  });
});