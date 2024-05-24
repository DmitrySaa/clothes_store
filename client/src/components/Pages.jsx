import { observer } from "mobx-react-lite";
import React, { useContext } from "react"
import { Context } from "..";
import { Pagination } from "react-bootstrap";

const Pages = observer((props) => {
    const {clothes} = useContext(Context)
    const pageCount = Math.ceil(clothes.totalCount / clothes.limit)
    const pages = []
    
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={clothes.page === page}
                    onClick={() => clothes.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
});

export default Pages;
