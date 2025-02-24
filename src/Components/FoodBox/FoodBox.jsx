import React from 'react'

import { Card, Row, Col, Divider, Input, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const { food, clickToDelete } = props;
  return (
    <div class='list'>
      <Row>
        <Col>
          <Card
            title={food.name}  
           
          >
            <img src={food.image} height={100} alt="food" />
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
              <b>Total Calories: {food.calories * food.servings}</b>{' '}
              kcal
            </p>
            <Button onClick={() => clickToDelete(food.name)}> Delete </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default FoodBox;  