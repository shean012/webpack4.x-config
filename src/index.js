import $ from 'jquery';
import './css/page.css'
import Vue from 'vue'
import App from './app.vue'
import { sum } from './utils'
import ReactApp from './reactComponent.js'
import React, { Component } from 'react';
import { getUser } from './case.ts'

$(() => {
  $('li:odd').css('backgroundColor', 'blue');
  $('li:even').css('backgroundColor', 'yellow');
})

let A = getUser('shean', 25, true)
console.log('a', A)
sum(2, 2)

import ReactDOM from 'react-dom';

ReactDOM.render(
  <ReactApp />,
  document.getElementById('root')
)

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})
