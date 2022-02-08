import React, {Component} from 'react';
import './Mint.css';
import number from '../pics/number.gif';

//#fdeb37

class Mint extends Component {
  render() {
    return (
      <div>
        <div className="wrapper"> 
          <h1> HOW BIG IS YOUR PEE PEE</h1>
          <h2> Size don't matter homies.</h2>
          <div className="mint-wrapper">
            <img className="number" src={number}/>
            <div className="mint inner">
              <div className="description">
                <span className="title"> How Big is My Pee Pee </span>
                <span className="description"> is a collection of 1500 randomly generated pee pee lengths stored on chain. </span>
              </div>
              <div className="free">
                FIRST 500 MINT FREE. STEALTH LAUNCH.
              </div>
              <div className="minted">
                <p className="mint-title">NFT Minted</p>
                <p className="mint-value">1,500/1,500</p>
              </div>
              <div className="minted">
                <p className="mint-title">Price</p>
                <p className="mint-value">0.019 Ξ</p>
              </div>
              <div className="mint-amount">
                <div className="change-amount">
                  <p className="change-amount">-</p>
                </div>
                <div className="amount">
                  <p className="amount">0</p>
                </div>
                <div className="change-amount">
                  <p className="change-amount">+</p>
                </div>
              </div>
              <div className="mint-button">
                MINT
              </div>
            </div>
          </div>
        </div>
        <div className="rarity">

        </div>
      </div>
    );
  }
}

export default Mint;