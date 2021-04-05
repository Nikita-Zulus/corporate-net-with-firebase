import React, { Fragment, useEffect } from "react";
import { Form } from "./Form";
import { connect } from "react-redux";
import {
  deleteFetchPost,
  redactFetchPost,
  fetchPosts,
  setAlert,
} from "../redux/actions";
import { Redacting } from "./Redacting";
import { Others } from "./Others";

function Posts_({
  posts,
  setDelete,
  setRedact,
  getPosts,
  firstname,
  secondname,
  registration,
  setAlert,
  currPath,
}) {
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);
  let timerId;
  const handleClick = () => {
    setAlert(true);
    timerId = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return;
  };
  let exactPosts;
  if (currPath === "/work") {
    exactPosts = posts.filter((post) => post.path === "/work");
  } else {
    exactPosts = posts.filter((post) => post.path === "/informal");
  }
  useEffect(() => {
    clearTimeout(timerId);
  }, [timerId]);
  return (
    <div className="conversations">
      <div className="dialog">
        <Others
          words={
            currPath === "/work"
              ? ["В сроки укладываемся", "Всё по графику"]
              : ["Привет привет", "Общаемся неформально"]
          }
        />
        {exactPosts.map((post) =>
          post.post.length ? (
            <Fragment key={post.id}>
              <div className="profile profile_ml">
                <img
                  className="icon"
                  src={require("../images/Bender.jpg")}
                  alt="profile-icon"
                />
                <div className="title title_ml title_marlef">
                  {`${firstname} ${secondname}`}
                </div>
              </div>
              <div className="dialog__post">{post.post}</div>
              <div className="dialog__control-buttons">
                <button
                  className="del"
                  onClick={
                    !registration
                      ? handleClick
                      : () => {
                          return setDelete({ id: post.id });
                        }
                  }
                >
                  Удалить
                </button>
                <Redacting
                  post={post}
                  setRedact={setRedact}
                  getPosts={getPosts}
                  registration={registration}
                  setAlert={setAlert}
                />
              </div>
            </Fragment>
          ) : (
            <div key={post.id}></div>
          )
        )}
      </div>
      <Form />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDelete: (value) => {
      dispatch(deleteFetchPost(value));
    },
    setRedact: (value) => {
      dispatch(redactFetchPost(value));
    },
    getPosts: () => {
      dispatch(fetchPosts());
    },
    setAlert: (value) => {
      dispatch(setAlert(value));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    firstname: state.firstname,
    secondname: state.secondname,
    registration: state.registration,
    posts: state.posts,
    currPath: state.currPath,
  };
};

export const Posts = connect(mapStateToProps, mapDispatchToProps)(Posts_);
