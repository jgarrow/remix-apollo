import { gql, useQuery } from "@apollo/client";

const LOCATIONS_QUERY = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default function Index() {
  const { data } = useQuery(LOCATIONS_QUERY);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {JSON.stringify(data)}
    </div>
  );
}
