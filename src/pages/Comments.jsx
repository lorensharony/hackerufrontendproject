import "../components/comments/Comments.css";
import { MagnifyingGlass } from "react-loader-spinner";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../features/news/news-slice";
import SingleComment from "../components/comments/SingleComment";
import { v4 } from "uuid";

function withComments(Component) {
  return function WithComments() {
    const location = useLocation();
    const news = useSelector((state) => {
      const newsFromCategory = state.news.newsFiltered[location.state.category];
      if (!newsFromCategory) return null;
      return newsFromCategory.find(
        (n) => n.title === location.state.news.title
      );
    });
    if (!news)
      return (
        <div className="min-height">
          <MagnifyingGlass />
        </div>
      );
    return <Component category={location.state.category} news={news} />;
  };
}

export default withComments(({ category, news }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isDark = useSelector((s) => s.theme.isDark);
  const addNote = (e) => {
    e.preventDefault();
    const comment = {
      id: v4(),
      userImage:
        "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",
      content: e.target[0].value,
    };

    dispatch(
      addComment({
        comment,
        title: news.title,
        category,
      })
    );
  };

  return (
    <div className="main-comments ">
      <div className="d-flex justify-content-center align-items-center min-height ">
        <div className="col-md-8 col-lg-6 w-75 res">
          <div className="comment-card shadow-0 border comment-card">
            <div className="card-body p-4 my-card-height d-flex flex-column">
              <form
                onSubmit={addNote}
                className="form-outline mb-4 flex-grow-1"
              >
                <input
                  required
                  type="text"
                  id="addANote"
                  className="form-control"
                  placeholder="Type comment..."
                />
                <br />
                <button
                  type="submit"
                  className={` ${
                    isDark
                      ? "form-label btn border-0 dark"
                      : " form-label btn border-0 light"
                  } `}
                >
                  + Add a note
                </button>
              </form>
              {news.comments.map((comment) => (
                <SingleComment
                  key={v4()}
                  category={category}
                  title={news.title}
                  comment={comment}
                />
              ))}
              <br />
              <button
                className="btn btn-secondary comment-go-back"
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
