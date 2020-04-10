import React, {Component} from 'react';

import Model from '../../components/UI/Model/Model';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        }

        constructor (props) {
            super(props);

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        componentWillUnmount () {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render () {

            return (
                <React.Fragment>
                    <Model show={this.state.error} modelClosed={this.errorConfirmedHandler}>
                        <p style={{color: 'red'}}><strong>
                            {this.state.error ? this.state.error.message : null}    
                        </strong></p>
                    </Model>
                    <WrappedComponent {...this.props}/>
                </React.Fragment>
            );
        }
    }
}

export default withErrorHandler;