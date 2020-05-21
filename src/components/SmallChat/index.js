import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Smallchat = () => {
  useEffect(() => {
    window.Smallchat = {
      config: {
        slackTeamId: 'T85U0SU3Y',
        scChannelId: '-LQtxeATMBLgNg9p1cT9',
        slackChannelId: 'CUTH8E5DL',
        uid: '-M1QhV1qOtIhqjHmopLB',
        planId: null,
        accountCreated: 1583160361291
      },
      appearance: {
        brand_color: '#67b246',
        contact_dismissible: false,
        contact_enabled: true,
        contact_field_label: 'Email',
        contact_immediately: false,
        contact_prompt:
          'Add your name and email to make sure you see our reply:',
        contact_reply:
          "Thanks {{name}}! You'll get a response here or we'll contact you at {{contact}}.",
        custom_css: 'zIndex: 9996',
        hide_logo: false,
        hide_team_icon: false,
        launcher_pos: 'left',
        launcher_prompt: 'Send a message',
        launcher_type: 'icon',
        messenger_blank: 'Send a message, and we’ll reply as soon as we can.',
        messenger_entry: 'Send a message...',
        messenger_prompt: 'How can we help you?',
        name_field_label: 'Name',
        offline_greeting:
          'We’re offline right now but typically respond in about an hr.',
        submit_label: 'Done',
        text_color: '#FFFFFF'
      },
      behavior: {
        avatar_config: 1,
        friday: {
          from: '9:00',
          to: '18:00'
        },
        hide_offline: false,
        monday: {
          from: '9:00',
          to: '18:00'
        },
        operating_hours: true,
        saturday: {
          disabled: true,
          from: '9:00'
        },
        sunday: {
          disabled: true
        },
        thursday: {
          from: '9:00',
          to: '18:00'
        },
        timezone: 'Europe/Berlin',
        tuesday: {
          from: '9:00',
          to: '18:00'
        },
        wednesday: {
          from: '9:00',
          to: '18:00'
        }
      }
    }
  }, [])

  return (
    <Helmet>
      <link rel='stylesheet' href='https://static.small.chat/messenger.css' />
      <script async src='https://static.small.chat/messenger.js' />
    </Helmet>
  )
}

export default Smallchat
