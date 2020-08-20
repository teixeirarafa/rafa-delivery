const GRAPHQL_ENDPOINT =
  'https://api.code-challenge.ze.delivery/public/graphql';

export const challengeAPI = async (query, variables = {}) => {
  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  return response.json();
};

export const allCategoriesSearch = `
  query allCategoriesSearch {
    allCategory{
      title
      id
    }
  }`;

export const pocSearch = `
  query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      id
      status
    }
  }`;

export const products = `
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      products(categoryId: $categoryId, search: $search) {
        id
        title
        images {
          url
        }
        productVariants {
          price
          title
          subtitle
        }
      }
    }
  }
  `;
