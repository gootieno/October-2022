export const getIndex = () => {
  const wrapper = document.getElementById("wrapper");
  return parseInt(wrapper.dataset.index);
};

// or without named export keyword
// export default getIndex;
