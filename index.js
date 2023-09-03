// const express = require('express')
// const fetch = require('node-fetch')
// import fetch from 'node-fetch'
import express from 'express'
// import fs from 'fs';

const app = express()
const port = 3002

// 1st nginx -> service name, 2nd nginx -> hostname(like domain name) to use it for endpoint
// fs.appendFileSync('/etc/hosts', 'nginx       nginx\n');

app.get('/', (req, res) => {
  res.json({
    "Name" : "hello world. Added some context to check argocd"
  })
})
// app.get('/nginx', async (req, res) => {
//   const url = 'http://nginx'
//   const response = await fetch(url);
//   const body = await response.text();
//   res.send(body)
// })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})