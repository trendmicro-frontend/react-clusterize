import 'trendmicro-ui/dist/css/trendmicro-ui.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Clusterize from '../src';

const rows = [];
const maxRows = 10000;
for (let i = 0; i < maxRows; ++i) {
    rows[i] = (
        <div style={{ borderBottom: '1px solid #f0f0f0', padding: '5px 10px' }}>Item #{i + 1}</div>
    );
}
rows.length = maxRows;

class App extends Component {
    render() {
        const name = 'React Clusterize';
        const url = 'https://github.com/cheton/react-clusterize';

        return (
            <div>
                <Navbar name={name} url={url} />
                <div className="container-fluid" style={{ padding: '20px 20px 0' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Rows: {maxRows}</h2>
                            <div
                                className="row-md-6"
                                style={{
                                    border: '1px solid #ccc'
                                }}
                            >
                                <Clusterize
                                    rows={rows}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
