export const currencyFormatter = (value) => {
  let IDRformat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return IDRformat.format(value);
};
