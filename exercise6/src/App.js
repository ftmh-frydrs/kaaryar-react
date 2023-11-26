import CommentTree from './components/CommentTree';
import './App.css';
import commentsData from './data/data.json';

function App() {

  return (
    <div>
      <h1 className='titel'>Comments</h1><hr />
      <CommentTree comments={commentsData} />
    </div>
  );
}

export default App;
