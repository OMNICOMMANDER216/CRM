import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardBody, CardHeader } from 'reactstrap';

const styles = {
  animated_div: {
    width: "100%",
  },
  card : {
    width: "50%",
    minWidth: "300px",
    margin: "0 auto"
  }
};

const doughnut = {
  labels: [
    'Total Live',
    'Currently in Dev',
    'Live this month',
  ],
  datasets: [
    {
      data: [190, 50, 8],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
      ],
    }],
};

class Charts extends Component {
  render() {
    return (
      <div className="animated fadeIn d-flex justify-content-center" style={styles.animated_div}>
          <Card style={styles.card}>
            <CardHeader>
              Doughnut Chart
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Doughnut data={doughnut} />
              </div>
            </CardBody>
          </Card>
      </div>
    );
  }
}

export default Charts;
