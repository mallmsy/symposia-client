import React from 'react';
import { connect } from 'react-redux';
import { filterPosts, fetchNewArticles } from '../actions/posts';

// CATEGORIES = ["CLIMATE", "IMMIGRATION", "2020", "NATIONAL+DEBT", "HEALTH+CARE", "EDUCATION", "LGBTQ" ]


const FilterBar = ({filterPosts, fetchNewArticles}) => {
  return (
    <div className='page-header'>
    <h1 className='title' id='index-title'>Symposia</h1>
    <h1>Filter By Topic</h1>
      <div className='topic-button-container'>
           <button className='topic-button' onClick={() => filterPosts("IMMIGRATION")}>IMMIGRATION</button>
           <button className='topic-button' onClick={() => filterPosts("WALL+STREET")}>WALL STREET</button>
           <button className='topic-button' onClick={() => filterPosts("2020")}>2020 ELECTION</button>
           <button className='topic-button' onClick={() => filterPosts("HEALTH+CARE")}>HEALTH CARE</button>
           <button className='topic-button' onClick={() => filterPosts("CLIMATE")}>CLIMATE</button>
           <button className='topic-button' onClick={() => filterPosts("EDUCATION")}>EDUCATION</button>
           <button className='topic-button' onClick={() => filterPosts("LGBTQ")}>LGBTQ+</button>
           <button className='topic-button' id='all-topics' onClick={() => filterPosts("NONE")}>ALL POSTS</button>
      </div>
        <button className='cute-button' onClick={() => fetchNewArticles()}>Get New Articles</button>
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
