// String (textos)
// Number (número)
// Boolean (true or false)

function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}
