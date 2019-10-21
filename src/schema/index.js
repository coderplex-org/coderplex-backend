import { gql } from 'apollo-server-express'

import userSchema from './user'
import eventProfileSchema from './event-profile'
import eventDetails from './event-details'
import eventGroupMemberRoleChoice from './event-group-member-role-choice'
import eventGroupMemberRoles from './event-group-member-roles'
import eventGroup from './event-group'
import eventLocationDetails from './event-location-details'
import eventParticipationStatus from './event-participation-status'
import eventParticipation from './event-participation'
import eventPublishedChoice from './event-published-choice'
import eventTicketTypeChoice from './event-ticket-type-choice'
import eventTicket from './event-ticket'
import eventTicketsAvailability from './event-tickets-availability'
import event from './event'
import interestTagChoice from './interest-tag-choice'
import paymentCurrencyChoice from './payment-curreny-choice'
import paymentDetails from './payment-details'
import socialProfile from './social-profile'
import subEvent from './sub-event'
import eventProfile from './event-profile'

const linkSchema = gql`
  scalar DateTime
  scalar URL

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`

export default [
  linkSchema, userSchema,
  eventProfileSchema, eventDetails,
  eventGroupMemberRoleChoice, eventGroupMemberRoles,
  eventGroup, eventLocationDetails,
  eventParticipationStatus, eventParticipation,
  eventProfile, eventPublishedChoice,
  eventTicketTypeChoice, eventTicket,
  eventTicketsAvailability, event,
  interestTagChoice, paymentCurrencyChoice,
  paymentDetails, socialProfile,
  subEvent
]
