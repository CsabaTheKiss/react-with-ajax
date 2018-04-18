import React, { Component } from 'react';
// import axios from '../../axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';

import Posts from './Posts/Posts';
// for lazy loading a component
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost'); 
});

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName="active">
                                    Posts
                                </NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                {/* Routes are rendered from top to bottom */}
                <Switch> {/* Only the first matched route will render */}
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;