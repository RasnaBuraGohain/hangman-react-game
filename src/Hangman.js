import React, { PureComponent } from 'react';

// you don't need to edit this file.

class Hangman extends PureComponent {
  render() {
    const {
      progress
    } = this.props

    return (
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" className="hangman">
        <g id="stand">
          <title>stand</title>
          <line fill="none" stroke="#ff0000" strokeWidth="3" strokeLinejoin="null" strokeLinecap="null" x1="161" y1="25" x2="161" y2="49" id="svg_20" />
          <line fill="none" stroke="#ff0000" strokeWidth="3" strokeLinejoin="null" strokeLinecap="null" x1="161" y1="26" x2="61" y2="28" id="svg_21" />
          <line fill="none" stroke="#ff0000" strokeWidth="3" strokeLinejoin="null" strokeLinecap="null" x1="61" y1="26" x2="62" y2="316" id="svg_23" />
          <line fill="none" stroke="#ff0000" strokeWidth="3" strokeLinejoin="null" strokeLinecap="null" x1="25" y1="315" x2="101" y2="315" id="svg_24" />
        </g>
        <g id="head" display={progress > 0 ? '' : 'none'}>
          <title>head</title>
          <ellipse fill="#fcf9f9" stroke="#000000" strokeWidth="5" cx="160" cy="77" id="svg_1" rx="25" ry="26" />
        </g>
        <g id="torso" display={progress > 1 ? '' : 'none'}>
          <title>torso</title>
          <line fill="none" stroke="#000000" strokeWidth="5" strokeLinejoin="null" strokeLinecap="null" x1="157" y1="100" x2="157" y2="190" id="svg_9" />
        </g>
        <g id="rightarm" display={progress > 2 ? '' : 'none'}>
          <title>rightarm</title>
          <line fill="none" stroke="#000000" strokeWidth="3" strokeLinejoin="null" strokeLinecap="null" x1="158" y1="130" x2="204" y2="107" id="svg_13" />
        </g>
        <g id="leftarm" display={progress > 3 ? '' : 'none'}>
          <title>leftarm</title>
          <line strokeWidth="3" id="svg_32" y2="108" x2="113" y1="129" x1="157" strokeLinecap="null" strokeLinejoin="null" stroke="#000000" fill="none" />
        </g>
        <g id="leftleg" display={progress > 4 ? '' : 'none'}>
          <title>leftleg</title>
          <line fill="none" stroke="#000000" strokeWidth="3" strokeLinejoin="null" strokeLinecap="null" x1="156" y1="188" x2="109" y2="229" id="svg_14" />
        </g>
        <g id="rightleg" display={progress > 5 ? '' : 'none'}>
          <title>rightleg</title>
          <line fill="none" stroke="#000000" strokeWidth="3" strokeLinejoin="null" strokeLinecap="null" x1="157" y1="187" x2="189" y2="233" id="svg_16" />
          <text x="0" y="120" fill="red" stroke="black" style={{ fontSize: '50px', color: 'red' }}>
            YOU DIED !
          </text>
          <text x="0" y="180" fill="red" stroke="black" style={{ fontSize: '50px', color: 'red' }}>
            VERY SAD !!
          </text>
        </g>
      </svg>
    )
  }
}

export default Hangman;


