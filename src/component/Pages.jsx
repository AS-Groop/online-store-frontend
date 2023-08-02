import React, {useContext} from 'react';
import {Pagination} from "react-bootstrap";
import {Context} from "../main.jsx";
import {observer} from "mobx-react-lite";

const Pages = observer(() => {
  const {devise} = useContext(Context)
  const pageCount = Math.ceil(devise.totalCount / devise.limit);
  const pages = []

  for (let i=0; i<pageCount; i++){
    pages.push(i+1)
  }
  return (
    <>
      <Pagination className="mt-3">
        {pages.map(i =>
          <Pagination.Item
            active={devise.page === i}
            onClick={()=>devise.setPage(i)}
            key={i}
          >
            {i}
          </Pagination.Item>
        )}
      </Pagination>
    </>

  );
});

export default Pages;