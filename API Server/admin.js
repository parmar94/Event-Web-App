/**
 * Admin Graphql Schema, Functions and Classes
 */
var { buildSchema } = require('graphql');

/**
 * Schema
 */
exports.schema = buildSchema(`
    type Organizer {
        name: String!
        email: String!
    }

    type Event {
        eventID: ID!
        name: String!
        decription: String!
        startTime: Int!
        endTime: Int!
        organizer: Organizer!
        status: String!
    }

    type Query {
        username: String!
        email: String!
        listEvents(page: Int): [Event]
    }

    type Mutation {
        approveEvent(eventID: ID!): Event!
        rejectEvent(eventID: ID!): Event!
        removeEvent(eventID: ID!): Event!
    }
`);

/**
 * Functions and Classes
 */
exports.root = {
    
}