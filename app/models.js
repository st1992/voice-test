'use strict'

const ipAccessList = [
    {
        id:"1",
        ip_range:"49.43.26.192/24",
    },
    {
        id:"2",
        ip_range:"45.155.91.156/24",
    },
]

const ipBlacklist = [
    {
        id:"1",
        ip_range:"45.155.91.156/24",
    }
]

const blacklistUA = [
    {
        id:"1",
        ua:"bria"
    },
    {
        id:"2",
        ua:"xlite"
    },
]


const endpoints = [
    {
        id:"1",
        username:"bayview",
        password:"bayview",
        registration_allowed:false,
    },
    {
        id:"2",
        username:"bayview2",
        password:"bayview2",
        registration_allowed:true,
    },
]


const servicesEnabled = [
    {
        id:"1",
        service:["conversational_ai", "automated_qa", "agent_assist"]
    }
]

module.exports = {ipAccessList, ipBlacklist, blacklistUA, endpoints, servicesEnabled}