import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./components/page/MainPage";
import SearchPage from "./components/page/SearchPage";
import BookPage from "./components/page/BookPage";

class App extends React.Component {
  render() {
    return (
      // <div>
      //   <MainPage />
      //   <SearchPage />
      //   <BookPage />
      // </div>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/search" element={<SearchPage />} />
            <Route path="/book/:id" element={<BookPage />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
