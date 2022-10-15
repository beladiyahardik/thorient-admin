import { Container, Card, Grid, Text, Table, Row, Col, Tooltip, User, StyledBadge } from "@nextui-org/react";
import React from "react";

const Dashboard = () => {

  const card = [
    {
      title: "Active user",
      body: '99'
    },
    {
      title: "Inactive user",
      body: '99'
    },
    {
      title: "Blocked user",
      body: '99'
    },
    {
      title: "Deleted user",
      body: '99'
    },
  ]


  return (
    <>

      <Grid.Container gap={2} justify="center">
        {
          card.map((ele) => (
            <Grid xs={3}>
              <Card isHoverable isPressable variant="bordered">
                <Card.Header><Text b>{ele.title}</Text></Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                  <Text css={{textAlign:"end",fontSize:"$6xl"}}>{ele.body}</Text>
                </Card.Body>
              </Card>
            </Grid>
          ))
        }
      </Grid.Container>
    </>
  );
};

export default Dashboard;
