import ApolloClient from "apollo-boost";

const Client = new ApolloClient({
    //uri: "https://desolate-island-35170.herokuapp.com/graphql"
    uri:"https://finalmoneyapp.herokuapp.com/graphql"
  });


export{
    Client,
}
