import React, { Component } from 'react';

/* global $ */
const $ = window.$;
class FileSelector extends Component {

  render() {
    return (
      <div>
        <button
          variant="contained"
          color="primary"
          onClick={e => {
            $('.MyFile').trigger('click');
          }}>
          Upload post Image
        </button>
        <input type="file" style={{ display: 'none' }} className="MyFile" />
      </div>
    )
  }
}

export default FileSelector;