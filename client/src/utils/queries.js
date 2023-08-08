import { gql } from '@apollo/client';

export const QUERY_DATA = gql`
  query getData($year: Int!, $name: String) {
    all_data(year: $year, name: $name) {
      _id
      counts
    }
  }
`;