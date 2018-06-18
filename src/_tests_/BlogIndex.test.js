import React from 'react';
import {Component} from 'react';
import { blogDetails } from '../actions';
import { connect } from 'react-redux';
import { blogUpdate } from '../actions';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import BlogIndex from '../components/Blog/BlogIndex'
import { BLOG_DETAILS } from '../actions/type'
import { BLOG_UPDATE } from '../actions/type'
import blog_reducer from '../reducers/api_reducer/api_reducer'
import * as types from '../actions/type';
import * as actions from '../actions/blogFilterActions/blogIndexAction'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

describe("blog actions", () => {
  let details = {
  "data":[
    {
    "id": 1,
    "title": "As an Alcoholic, Your Company “Perks” are Killing Me",
    "discription": "Dispatches from unhappy hour",
    "content": "discription content",
    "genre": "Tech",
    "created_at": "2-5-2018",
    "duration": "5"
  },
  {
    "id": 2,
    "title": "As an Alcoholic, Your Company “Perks” are Killing Me",
    "discription": "Dispatches from unhappy hour",
    "genre": "Entrepreneurship",
    "content": "discription content",
    "created_at": "2-5-2018",
    "duration": "10"
  }]
}

  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })


  // it('should create an action to add a blogDetails', () => {
  //   fetchMock
  //     .getOnce('http://localhost:3000/example.json', { body: { data: [details] }, headers: { 'content-type': 'application/json' }})
  //   const expectedActions = { type: types.BLOG_DETAILS, body: { data: [details] }}
  //   const store = mockStore({ data: [] });
  //   return store.dispatch(actions.blogDetails()).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions)
  //   })
  // })


  it('should return initial value', () => {
    let details = 'details'
    let data = {}
    expect(blog_reducer([], {
      type: types.BLOG_DETAILS,
      payload: {details, data}
    })
    ).toEqual({
      details: {}
    })
  })

  it('should  get all blog details', () => {
    let details = 'details'
    let data = {
      "data":[
      {
        "id": 1,
        "title": "As an Alcoholic, Your Company “Perks” are Killing Me",
        "discription": "Dispatches from unhappy hour",
        "content": "discription content",
        "genre": "Tech",
        "created_at": "2-5-2018",
        "duration": "5"
      },
      {
        "id": 2,
        "title": "As an Alcoholic, Your Company “Perks” are Killing Me",
        "discription": "Dispatches from unhappy hour",
        "genre": "Entrepreneurship",
        "content": "discription content",
        "created_at": "2-5-2018",
        "duration": "10"
      }]}
      expect(
        blog_reducer([], {
          type: types.BLOG_DETAILS,
          payload: {details, data}
        })
        ).toEqual(
        {
          details: {
            "data":[
            {
              "id": 1,
              "title": "As an Alcoholic, Your Company “Perks” are Killing Me",
              "discription": "Dispatches from unhappy hour",
              "content": "discription content",
              "genre": "Tech",
              "created_at": "2-5-2018",
              "duration": "5"
            },
            {
              "id": 2,
              "title": "As an Alcoholic, Your Company “Perks” are Killing Me",
              "discription": "Dispatches from unhappy hour",
              "genre": "Entrepreneurship",
              "content": "discription content",
              "created_at": "2-5-2018",
              "duration": "10"
            }]}
          }
          )
      })

  it('should update details', () => {
    let details = 'details'
    let data = {
      "data":[
      {
        "id": 1,
        "title": "As an Alcoholic, Your Company “Perks” are Killing Me",
        "discription": "Dispatches from unhappy hour",
        "content": "discription content",
        "genre": "Tech",
        "created_at": "2-5-2018",
        "duration": "5"
      }]}
      expect(
        blog_reducer([], {
          type: types.BLOG_UPDATE,
          payload: {details, data}
        })
        ).toEqual(
        {
          details: {
            "data":[
            {
              "id": 1,
              "title": "As an Alcoholic, Your Company “Perks” are Killing Me",
              "discription": "Dispatches from unhappy hour",
              "content": "discription content",
              "genre": "Tech",
              "created_at": "2-5-2018",
              "duration": "5"
            }]}
          }
          )
      })
})