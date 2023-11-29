export const priceWithCommas = (x: number | undefined): string => {
  if (x) {
    return "$ " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return "";
};
