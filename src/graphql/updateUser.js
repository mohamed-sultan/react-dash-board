import gql from 'graphql-tag'

export default gql`
mutation updateUser(
    $_id:ID!
    $fullName: String
    $mobileNumber: String
    $pin: String
    $showName: Boolean
    $category: String,
    $description:String
        $profile:String
        $photo0:String
        $photo1:String
        $photo2:String
        $photo3:String
        $photo4:String
        $photo5:String
        $latitude:String
        $longitude:String
  $disableBusiness:Boolean

  ) {
    updateUser(
      _id: $_id
      fullName: $fullName
      mobileNumber: $mobileNumber
      pin: $pin
      showName: $showName
      category: $category
      description: $description
      profile:$profile
      photo0:$photo0
      photo1:$photo1
      photo2:$photo2
      photo3:$photo3
      photo4:$photo4
      photo5:$photo5
      latitude:$latitude
      longitude: $longitude
      disableBusiness:$disableBusiness
    ) {
    user{
        _id
      fullName
      mobileNumber
      pin
      showName
      category
      description
      profile
        photo0
        photo1
        photo2
        photo3
        photo4
        photo5
        latitude
        longitude
      disableBusiness
    }
      error{
        message
      }
    }
  }
`;