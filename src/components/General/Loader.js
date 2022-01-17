import React from 'react';
import ReactLoading from 'react-loading';

const DownloadLoader = ({ type = 'bubbles', color = '#08c' }) => (
    <div className="download-loader">
        <ReactLoading type={type} color={color} height={'100%'} width={'100%'} />
    </div>
);

export default DownloadLoader;