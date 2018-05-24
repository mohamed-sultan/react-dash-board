import gql from 'graphql-tag'

export default gql`
{
    getUsers{
      _id
      mobileNumber
      fullName
      profile
      disableBusiness
    }
  }
`;