import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filterPosts } from '../actions/posts';

const FilterBar = ({filterPosts}) => {
  return (
    <div className={"App-header"}>
      <Header as='h3' icon textAlign='center'>
          <Header.Content>SYMPOSIA</Header.Content>
         <Icon name='star outline' circular />
         <Header.Content>Filter By Topic</Header.Content>
         <br/>
         <Button circular onClick={() => filterPosts("IMMIGRATION")}>IMMIGRATION</Button>
         <Button circular onClick={() => filterPosts("NATIONAL+DEBT")}>NATIONAL DEBT</Button>
         <Button circular onClick={() => filterPosts("2020")}>2020 ELECTION</Button>
         <Button circular onClick={() => filterPosts("ABORTION")}>ABORTION</Button>
         <Button circular onClick={() => filterPosts("climate")}>CLIMATE</Button>
       </Header>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return({
    filterPosts: (category) => dispatch(filterPosts(category))
  })
}

export default connect(null, mapDispatchToProps)(FilterBar);
