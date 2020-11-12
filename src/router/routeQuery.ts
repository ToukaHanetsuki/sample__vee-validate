import queryString from 'query-string';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseQuery = (query: string): any => {
  return queryString.parse(query, {
    arrayFormat: 'bracket'
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stringifyQuery = (params: any): string => {
  if (0 === Object.keys(params).length) {
    return '';
  } else {
    return '?' + queryString.stringify(params, {
      arrayFormat: 'bracket'
    });
  }
};
