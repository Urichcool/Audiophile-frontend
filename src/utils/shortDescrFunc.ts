export const shortDescrFunc = (descr: string | undefined): string => {
  if (descr) {
    if (descr.length <= 102) {
      return descr;
    }
    return descr.slice(0, 102) + "...";
  }
  return "";
};
