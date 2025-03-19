export default function decorate(block) {
  console.log(block);
  Array.from(block.children).forEach((eachblock, index) => {
    console.log(eachblock);
    eachblock.classList.add(index + 1);
    Array.from(eachblock.children).forEach((nestblock, index1) => {
      nestblock.classList.add(index1 + 1);
    });
  });
}
