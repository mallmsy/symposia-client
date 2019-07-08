import React from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { filterPosts, fetchNewArticles } from '../actions/posts';

// CATEGORIES = ["CLIMATE", "IMMIGRATION", "2020", "NATIONAL+DEBT", "HEALTH+CARE", "EDUCATION", "LGBTQ" ]


const FilterBar = ({filterPosts, fetchNewArticles}) => {
  return (
    <div className='page-header'>
    <h1 className='title'>Symposia</h1>
      <Header textAlign='center'>
         <h1>Filter By Topic</h1>
         <div className='topic-button-container'>
           <button className='topic-button' onClick={() => filterPosts("IMMIGRATION")}>IMMIGRATION</button>
           <button className='topic-button' onClick={() => filterPosts("WALL+STREET")}>WALL STREET</button>
           <button className='topic-button' onClick={() => filterPosts("2020")}>2020 ELECTION</button>
           <button className='topic-button' onClick={() => filterPosts("HEALTH+CARE")}>HEALTH CARE</button>
           <button className='topic-button' onClick={() => filterPosts("CLIMATE")}>CLIMATE</button>
           <button className='topic-button' onClick={() => filterPosts("EDUCATION")}>EDUCATION</button>
           <button className='topic-button' onClick={() => filterPosts("LGBTQ")}>LGBTQ+</button>
           <button className='topic-button' onClick={() => filterPosts("NONE")}>ALL POSTS</button>
         </div>
       </Header>
       <Header as="h4" textAlign='center'>
        <Header.Content>
        <Button onClick={() => fetchNewArticles()}>Get New Articles</Button>
        </Header.Content>
      </Header>
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
