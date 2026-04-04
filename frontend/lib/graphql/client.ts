const GRAPHQL_URL = 'http://localhost:8081/graphql';

export async function graphqlRequest(query: string, variables?: Record<string, any>) {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const data = await response.json();

  if (data.errors) {
    throw new Error(data.errors[0].message || 'GraphQL error');
  }

  return data.data;
}

export async function getStudentInfo(id: number) {
  const query = `
    query GetStudent($id: ID!) {
      student(id: $id) {
        id
        name
        email
      }
    }
  `;

  return graphqlRequest(query, { id });
}

export async function addAssignment(
  name: string,
  description: string,
  studentId: string
) {
  const query = `
    mutation { 
      addAssignment($name: String!, $description: String, $studentId: ID!) {
      
    }
  `;

  return graphqlRequest(query, { name, description, studentId });
}
