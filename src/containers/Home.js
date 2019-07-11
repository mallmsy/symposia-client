import React from 'react';

const Home = () => {
  return (
    <div className='block-div'>
    <h1 className='title' id='methodology'>Symposia</h1>
      <div>
        <h2 className='header'>Escape The Echo Chamber</h2>
        <h3>ech·o cham·ber /ˈekō ˌCHāmbər/</h3>
        <p>"an environment in which a person encounters only beliefs or opinions that coincide with their own, so that their existing views are reinforced and alternative ideas are not considered""</p>
        <p>Without the opportunity to hear a variety of perspectives and ideas it becomes difficult to tolerate thoughts, opinions and people that are different from ourselves.</p>
        <h3>Why 'Symposia'?</h3>
        <p>In ancient Greece, symposia were a part of a banquet that took place after the meal, when drinking was accompanied by music, dancing, and conversation. We hope to revive that tradition of sharing a meal, a drink and lively (but civil) conversation!</p>
      </div>
        <br/>
      <div>
        <h3 className='header'>Methodology</h3>
        <p>The articles that appear on Symposia are sorted by political leaning - conservative, moderate or liberal - and these designations are made based on the media source from which they originate.</p>
      </div>
        <br/>
      <div className='sources-container'>
        <div>
          <h4>LIBERAL SOURCES</h4>
          <ul className='source-item'>
            <a href='https://www.cnn.com/'><li>CNN</li></a>
            <a href='https://www.nytimes.com/'><li>The New York Times</li></a>
            <a href='https://www.cbsnews.com/'><li>CBS News</li></a>
            <a href='https://www.huffpost.com/'><li>The Huffington Post</li></a>
            <a href='https://www.msnbc.com/'><li>MSNBC</li></a>
          </ul>
        </div>

        <div>
          <h4>MODERATE SOURCES</h4>
          <ul className='source-item'>
            <a href='https://www.bcc.co.uk/'><li>BBC News</li></a>
            <a href='https://www.wsj.com/'><li>The Wall Street Journal</li></a>
            <a href='https://www.ap.org/en-us/'><li>Associated Press</li></a>
            <a href='https://www.bloomberg.com/'><li>Bloomberg</li></a>
            <a href='https://www.reuters.com/'><li>Reuters</li></a>
            <a href='https://www.usatoday.com/'><li>USA Today</li></a>
          </ul>
        </div>

        <div>
          <h4>CONSERVATIVE SOURCES</h4>
          <ul className='source-item'>
            <a href='https://www.foxnews.com/'><li>Fox News</li></a>
            <a href='https://www.breitbart.com/'><li>Breitbart News</li></a>
            <a href='https://www.nationalreview.com/'><li>National Review</li></a>
            <a href='https://www.theamericanconservative.com/'><li>The American Conservative</li></a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
