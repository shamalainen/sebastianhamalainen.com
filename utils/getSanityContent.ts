export async function getSanityContent({ query, variables = {} }) {
  const { data } = await fetch('https://rpg0m83x.api.sanity.io/v1/graphql/production/default', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((response) => response.json());

  return data;
}
