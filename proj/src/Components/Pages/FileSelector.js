import React, { Component } from 'react';
import $ from "jquery";
import '../../assets/fontello-b70d9401/css/fontello.css'

// need jquery

class FileSelector extends Component {

  render() {
    return (
      <div>
        <div class="the-icons span3" title="Code: 0xe800">
          <i class="demo-icon icon-gauge"></i> 
          </div>
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