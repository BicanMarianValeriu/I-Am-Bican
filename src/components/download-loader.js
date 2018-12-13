import React from 'react';
import ReactLoading from 'react-loading';

const DownloadLoader = ({ type, color }) => (
    <div className="download-loader">
        <ReactLoading type='bubbles' color="#08c" height={'100%'} width={'100%'} />
    </div>
);
 
export default DownloadLoader;