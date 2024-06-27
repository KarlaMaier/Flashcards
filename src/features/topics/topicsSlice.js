// topicsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: {}
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        name,
        icon,
        quizIds: []
      };
    },
    addQuizToTopic: (state, action) => {
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
});

export const { addTopic, addQuizToTopic } = topicsSlice.actions;

export const selectTopics = state => state.topics.topics;

export default topicsSlice.reducer;
