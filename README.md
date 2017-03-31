# react-clusterize [![build status](https://travis-ci.org/cheton/react-clusterize.svg?branch=master)](https://travis-ci.org/cheton/react-clusterize) [![Coverage Status](https://coveralls.io/repos/github/cheton/react-clusterize/badge.svg?branch=master)](https://coveralls.io/github/cheton/react-clusterize?branch=master)

[![NPM](https://nodei.co/npm/react-clusterize.png?downloads=true&stars=true)](https://nodei.co/npm/react-clusterize/)

React component for [Clusterize.js](https://github.com/NeXTs/Clusterize.js/)

Demo: https://cheton.github.io/react-clusterize

## Installation

1. Install the latest version of [react](https://github.com/facebook/react) and [react-clusterize](https://github.com/cheton/react-clusterize):

  ```
  npm install --save react react-dom react-clusterize
  ```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Clusterize from 'react-clusterize';

const rows = [];
const maxRows = 10000;
for (let i = 0; i < maxRows; ++i) {
    rows[i] = (
        <div style={{ borderBottom: '1px solid #f0f0f0', padding: '5px 10px' }}>
            Item #{i + 1}
        </div>
    );
}
rows.length = maxRows;

const mountNode = document.getElementById('#container');

ReactDOM.render(<Clusterize rows={rows} />, mountNode);
```

## API

### Properties

Name | Type | Default | Description 
:--- | :--- | :------ | :----------
rows | array | [] | An array of React elements or HTML tags in String.
scrollTop | number | 0 | Set the current vertical position of the scroll bar.

## License

MIT
