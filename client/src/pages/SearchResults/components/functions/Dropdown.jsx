export function Dropdown({ setFilterCriteria }) {
  const dropdowns = document.querySelectorAll(".dropdown-filter");
  //   loop through all dropdown
  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");

    // add the clicked select style to the select element
    select.classList.toggle("select-clicked");
    //   add the rotate stylesto the caret element
    caret.classList.toggle("caret-rotate");
    // add open style to menu element
    menu.classList.toggle("menu-open");

    // loop through all option element
    options.forEach((option) => {
      // add click event to the option element
      option.addEventListener("click", () => {
        selected.innerText = option.innerText;
        switch (option.innerText) {
          case "Default":
            setFilterCriteria("");
            break;
          case "High to Low":
            setFilterCriteria("desc");
            break;
          case "Low to High":
            setFilterCriteria("asc");
            break;
          default:
            break;
        }
        // add the clicked select style to the select element
        select.classList.remove("select-clicked");
        //   add the rotate stylesto the caret element
        caret.classList.remove("caret-rotate");
        // add open style to menu element
        menu.classList.remove("menu-open");
      });
    });
  });
}

export default Dropdown;
