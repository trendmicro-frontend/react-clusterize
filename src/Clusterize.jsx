import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import ClusterizeJS from 'clusterize.js';

class Clusterize extends Component {
    static propTypes = {
        rows: PropTypes.array,
        scrollTop: PropTypes.number
    };
    static defaultProps = {
        rows: [],
        scrollTop: 0
    };

    clusterize = null;
    scrollElem = null;
    contentElem = null;

    componentDidMount() {
        const scrollElem = ReactDOM.findDOMNode(this.scrollElem);
        const contentElem = ReactDOM.findDOMNode(this.contentElem);
        const rows = this.props.rows.map(row => {
            if (typeof row === 'string') {
                return row;
            }
            return React.isValidElement(row) ? ReactDOMServer.renderToString(row) : null;
        });

        this.clusterize = new ClusterizeJS({
            rows,
            scrollElem,
            contentElem,
            show_no_data_row: false
        });
    }
    componentWillUnmount() {
        if (this.clusterize) {
            this.clusterize.destroy(true);
            this.clusterize = null;
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.rows.length === 0) {
            this.clusterize.clear();
            return;
        }
        if (nextProps.rows !== this.props.rows) {
            const rows = nextProps.rows.map(row => {
                if (typeof row === 'string') {
                    return row;
                }
                return React.isValidElement(row) ? ReactDOMServer.renderToString(row) : null;
            });
            this.clusterize && this.clusterize.update(rows);
        }
        if (nextProps.scrollTop !== this.props.scrollTop) {
            this.scrollElem.scrollTop = nextProps.scrollTop;
        }
    }
    render() {
        const { className, style } = this.props;

        return (
            <div
                ref={node => {
                    this.scrollElem = node;
                }}
                className={className}
                style={{
                    height: '100%',
                    overflow: 'auto',
                    ...style
                }}
            >
                <div
                    ref={node => {
                        this.contentElem = node;
                    }}
                />
            </div>
        );
    }
}

export default Clusterize;
