import React, {useEffect, useState} from 'react';
import './App.css';
import List from './Movie/List';
import withListLoading from './Movie/withListLoading';
import {Container, Row} from 'react-bootstrap';
import axios from 'axios';

function App() {
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({loading: false, repos: null});

    useEffect(() => {
        setAppState({loading: true});
        const apiUrl = 'https://localhost:44368/products/get';
        axios
            .get(apiUrl)
            .then((repos) => {
                const allRepos = repos.data;
                setAppState({loading: false, repos: allRepos});
            });
    }, [setAppState]);

    return (
        <div className='App'>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <h1>Movie List</h1>
                </Row>

                <Row className="mt-5">
                    <ListLoading isLoading={appState.loading} repos={appState.repos}/>
                </Row>
            </Container>
        </div>
    );
}

export default App;