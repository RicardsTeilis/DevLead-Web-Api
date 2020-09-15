import React from 'react';
import {Col, Card} from 'react-bootstrap';

const Movie = (props) => {
    const {repos} = props;
    if (!repos || repos.length === 0) 
        return <p>No repos, sorry</p>;
    return (

      <React.Fragment>
      {
          repos.map((repo) => {
              return (
                  <Col xs={12} md={6} lg={3} key={repo.id}>
                      <Card>
                          <Card.Img variant="top" src={repo.img}/>
                          <Card.Body>
                              <Card.Title>{repo.title}</Card.Title>
                              <Card.Text>
                                  {repo.description}
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
              )
          })
      }
      </React.Fragment>

    );
};

export default Movie;