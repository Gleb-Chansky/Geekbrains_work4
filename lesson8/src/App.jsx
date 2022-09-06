import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "./redux/commentsReducer/commentsReducer";

function App() {

  const comments = useSelector(state => state.comments);
  const isLoading = useSelector(state => state.isLoading);
  const isError = useSelector(state => state.isError);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(getComments());
  }

  useEffect(() => {
    dispatch(getComments())
  }, [])

  if (isError) {
    return (
      <div>
        <h1>Упс что-то пошло не так ...</h1>
        <button onClick={handleRestart}>Обновить...</button>
      </div>
    )
  }

  return (
    <div>
      {isLoading ? (
        <div>
          <h1>Идет загрузка ...</h1>
        </div>
      ) : (
          comments.map((comment) => {
            return (
            <div key={comment.id}>
              {comment.name}
            </div>
            )
          })
      )}
    </div>
  );
}

export default App;
