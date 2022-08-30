export const queueFilter = (regexp: RegExp, row: any) =>
  row.publicKey.toString().match(regexp);
// ||
// (row.baseSymbol &&
//   row.quoteSymbol &&
//   `${row.baseSymbol}/${row.quoteSymbol}`.match(regexp));
