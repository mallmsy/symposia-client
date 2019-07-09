import React from 'react';

const HeaderBlock = () => {
  return (
    <div className='block-div'>
    <h1 className='title' id='methodology'>Symposia</h1>
      <div>
        <h3 className='header'>Escape The Echo Chamber</h3>
        <p>ECHO CHAMBER ech·o cham·ber /ˈekō ˌCHāmbər/</p>
        <p>- an environment in which a person encounters only beliefs or opinions that coincide with their own, so that their existing views are reinforced and alternative ideas are not considered.</p>
      </div>
        <br/>
      <div>
        <h3 className='header'>Methodology</h3>
        <p>The articles that appear on Symposia are sorted by political leaning - conservative, moderate or liberal - and these designations are made based on the media source from which they originate.</p>
        <h3 className='header'>Sources</h3>
      </div>
        <br/>
      <div className='sources-container'>
        <div>
          <h4>LIBERAL SOURCES</h4>
          <ul className='source-item'>
            <li>CNN</li>
            <li>The New York Times</li>
            <li>CBS News</li>
            <li>The Huffington Post</li>
            <li>MSNBC</li>
          </ul>
        </div>

        <div>
          <h4>MODERATE SOURCES</h4>
          <ul className='source-item'>
            <li>BBC News</li>
            <li>The Wall Street Journal</li>
            <li>Associated Press</li>
            <li>Bloomberg</li>
            <li>Reuters</li>
            <li>USA Today</li>
          </ul>
        </div>

        <div>
          <h4>CONSERVATIVE SOURCES</h4>
          <ul className='source-item'>
            <li>Fox News</li>
            <li>Breitbart News</li>
            <li>National Review</li>
            <li>The American Conservative</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderBlock;
