import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const TimeCounter = () => {
  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [alarmTime, setAlarmTime] = useState(0);

  // Stopwatch functions
  const startStopwatch = () => {
    setStopwatchRunning(true);
  };

  const stopStopwatch = () => {
    setStopwatchRunning(false);
  };

  const resetStopwatch = () => {
    setStopwatchRunning(false);
    setStopwatchTime(0);
  };

  // Alarm function
  const handleSetAlarm = () => {
    if (alarmTime > 0) {
      setTimeout(() => {
        alert('Alarm time is up!');
      }, alarmTime * 1000);
    }
  };

  useEffect(() => {
    if (stopwatchRunning) {
      const interval = setInterval(() => {
        setStopwatchTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [stopwatchRunning]);

  return (
    <Container className=' py-5 '>
        <h1 className=' text-center fw-bold  my-4 '>Timer to cook</h1>
      <Row>
        <Col md={6}>
          <h2>Stopwatch</h2>
          <p>Time: {stopwatchTime} seconds</p>
          <Button  onClick={startStopwatch} disabled={stopwatchRunning}>
            Start
          </Button>
          <Button className='bg-danger mx-4 ' onClick={stopStopwatch} disabled={!stopwatchRunning}>
            Stop
          </Button>
          <Button className=' bg-success ' onClick={resetStopwatch}>Reset</Button>
        </Col>
        <Col md={6}>
          <h2>Set Alarm</h2>
          <p>Set a time duration (in seconds)</p>
          <input
            type="number"
            value={alarmTime}
            onChange={(e) => setAlarmTime(Number(e.target.value))}
          />
          <Button className=' btn-sm ms-4 ' onClick={handleSetAlarm}>Set Alarm</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TimeCounter;
