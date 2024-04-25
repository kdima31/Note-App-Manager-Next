"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, del } from "./Redux/features/noteSlice";
import { useRouter } from "next/navigation";

function Notes() {
  const router = useRouter();
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let data = useSelector((state) => state.notes);
  let dispatch = useDispatch();
  // FIXME
  // useNavigation
  // const router = useRouter();
  let handleDelete = (index) => {
    dispatch(del(index));
  };

  let handleEdit = (i) => {
    router.push("update");
  };
  const handleSave = () => {
    if (title.trim() !== "" && content.trim() !== "") {
      dispatch(add({ title, content }));
      setTitle(""); // Clearing the title input
      setContent(""); // Clearing the content textarea
    } else {
      // Handle validation or display an error message
      console.log("Title or content is empty!");
    }
  };

  return (
    <>
      <div id="container-fluid">
        <div className="addnote bg-white ">
          <div className="input">
            <h3 className="top1"> Add a Note</h3>
            <input
              className="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="form"
              id="exampleFormControlTextarea1"
              placeholder="Take a note..."
              rows="3"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button
            className="btn btn-primary mt-2  "
            onClick={() => handleSave()}
          >
            Add Notes
          </button>
        </div>

        <div className="row" id="footer">
          <div className="recent d-flex gap-4 mb-2">
            {/* <img src={noteimage} alt='note' /> */}
            <h4 style={{ fontSize: "24px", color: "#203562" }}>
              {" "}
              My Notes{" "}
            </h4>{" "}
            <br />
          </div>

          <p style={{ fontSize: "16px", color: "#203562" }}> Recently viewed</p>

          <div className="row-main d-flex gap-3">
            {data.map((e, i) => {
              return (
                <div key={e.id}>
                  <div
                    className="card "
                    style={{
                      width: "317px",
                      height: "263px",
                      borderRadius: "16px",
                    }}
                  >
                    <div className="card-main d-flex">
                      <h4
                        style={{
                          fontSize: "24px",
                          color: "#203562",
                          padding: "20px 0px 0px 15px",
                        }}
                      >
                        {e.title}
                      </h4>{" "}
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      <div className="mt-4">
                        <div className="d-flex">
                          <div className="btn">
                            {/* WARNING */}
                            {/* <img
															src={editimg}
															alt=''
															onClick={() => handleEdit(i, e.note)}
														/> */}
                            {/* TODO */}
                            <h3 onClick={handleEdit(i, e.note)}>edittttt</h3>
                          </div>
                          &nbsp;
                          <div className="btn">
                            {/* WARNING */}
                            {/* <img
															src={deleteimg}
															alt='delete'
															onClick={() => handleDelete(i)}
														/> */}
                            <h3 onClick={handleDelete}>deletee</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <p
                        className="mb-3"
                        style={{ fontSize: "16px", color: "303030" }}
                      >
                        {e.content}
                      </p>
                      <p className="fs-6"> 5 days ago</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notes;
