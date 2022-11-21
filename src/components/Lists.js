import React, { useState, useEffect } from "react";
import '../css/Lists.css';

const Lists = ({ nameItems, editItem, removeItem }) => {
    return (
        nameItems.map((item) => {
            return (
                <div class="container" key={item.id}>
                    <div className="row">
                        <div className="col-8">
                            <h2 className="name_item">{item.title}</h2>
                        </div>
                        <div className="col-4 text-center">
                            <button type="button" class="btn btn-primary btn_edit" onClick={() => {
                                if (window.confirm("Bạn có muốn sửa công việc này không!")) {
                                    editItem(item.id)
                                }
                            }
                            }>Sửa</button>
                            <button type="button" class="btn btn-danger btn_delete" onClick={() => {
                                if (window.confirm("Bạn có muốn xóa công việc này không!")) {
                                    removeItem(item.id)
                                }
                            }
                            }>Xóa</button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export { Lists };
