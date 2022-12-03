export const queueFilter = (regexp: RegExp, row: any) => {
  if (row.account.name) {
    return queueFilterV1_0_6(regexp, row);
  }
  return queueFilterV1_2_14(regexp, row);
};

export const queueFilterV1_0_6 = (regexp: RegExp, row: any) =>
  row.publicKey.toString().match(regexp) || row.account.name.match(regexp);

export const queueFilterV1_2_14 = (regexp: RegExp, row: any) =>
  row.publicKey.toString().match(regexp) || row.account.id.match(regexp);
