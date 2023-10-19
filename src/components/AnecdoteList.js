import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appendVote } from "../reducers/anecdoteReducer";
import {
  setNotification,
  closeNotification,
} from "../reducers/notificationReducer";
import { initializeAnecdotes } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    return state.anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    );
  });
  anecdotes.sort((a, b) => b.votes - a.votes);
  const dispatch = useDispatch();

  const vote = anecdote => {
    dispatch(appendVote(anecdote));
    dispatch(setNotification(`you voted '${anecdote.content}'`));
    setTimeout(() => {
      dispatch(closeNotification());
    }, 5000);
  };

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, [dispatch]);

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
