import { Container, Card, Grid, Text, Table, Row, Col, Tooltip, User, StyledBadge } from "@nextui-org/react";
import React from "react";

const Dashboard = () => {

  const card = [
    {
      title: "Active user",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Inactive user",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Blocked user",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      title: "Deleted user",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content."
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
                  <Text>{ele.body}</Text>
                </Card.Body>
              </Card>
            </Grid>
          ))
        }
      </Grid.Container>
      <Table
        aria-label="Example static collection table"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="single"
      >
        <Table.Header>
          <Table.Column>NAME</Table.Column>
          <Table.Column>ROLE</Table.Column>
          <Table.Column>STATUS</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>Tony Reichert</Table.Cell>
            <Table.Cell>CEO</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>Zoey Lang</Table.Cell>
            <Table.Cell>Technical Lead</Table.Cell>
            <Table.Cell>Paused</Table.Cell>
          </Table.Row>
          <Table.Row key="3">
            <Table.Cell>Jane Fisher</Table.Cell>
            <Table.Cell>Senior Developer</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell>William Howard</Table.Cell>
            <Table.Cell>Community Manager</Table.Cell>
            <Table.Cell>Vacation</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
};

export default Dashboard;
