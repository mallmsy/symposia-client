import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filterPosts, fetchNewArticles } from '../actions/posts';

const FilterBar = ({filterPosts, fetchNewArticles}) => {
  return (
    <div className='page-header'>
      <Header as='h3' icon textAlign='center'>
          <Header.Content>SYMPOSIA</Header.Content>
         <Icon name='star outline' circular />
         <Header.Content>Filter By Topic</Header.Content>
         <br/>
         <button className='topic-button' onClick={() => filterPosts("IMMIGRATION")}>IMMIGRATION</button>
         <button className='topic-button' onClick={() => filterPosts("NATIONAL+DEBT")}>NATIONAL DEBT</button>
         <button className='topic-button' onClick={() => filterPosts("2020")}>2020 ELECTION</button>
         <button className='topic-button' onClick={() => filterPosts("ABORTION")}>ABORTION</button>
         <button className='topic-button' onClick={() => filterPosts("CLIMATE")}>CLIMATE</button>
       </Header>
       {/*<Header as="h4" textAlign='center'>
        <Header.Content>
        <Button onClick={() => fetchNewArticles()}>Get New Articles</Button>
        </Header.Content>
      </Header>*/}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return({
    filterPosts: (category) => dispatch(filterPosts(category)),
    fetchNewArticles: () => dispatch(fetchNewArticles())
  })
}

export default connect(null, mapDispatchToProps)(FilterBar);
